import React, { useEffect, useState, useSyncExternalStore } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

const getReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  !!window.matchMedia?.(REDUCED_MOTION).matches;

const subscribeReducedMotion = (onChange: () => void): (() => void) => {
  const mq = window.matchMedia?.(REDUCED_MOTION);
  mq?.addEventListener('change', onChange);
  return () => mq?.removeEventListener('change', onChange);
};

/**
 * A single line shown in the {@link Terminal}.
 */
export interface TerminalLine {
  /**
   * Prompt command (rendered after `$`). Omit for plain output lines.
   */
  cmd?: string;

  /**
   * Output printed below the command.
   */
  out?: React.ReactNode;
}

interface TerminalProps {
  /**
   * Title shown in the window bar.
   */
  title?: string;

  /**
   * Lines to type out in sequence.
   */
  lines: TerminalLine[];

  /**
   * Milliseconds per typed character.
   */
  speed?: number;
}

/**
 * A faux terminal window that types its commands out, then reveals output.
 * Honors `prefers-reduced-motion` by rendering everything immediately.
 */
const Terminal: React.FC<TerminalProps> = ({
  title = 'quietdaemon: ~',
  lines,
  speed = 38
}) => {
  const [typedIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );
  // With reduced motion everything is shown immediately.
  const lineIdx = reduceMotion ? lines.length : typedIdx;

  useEffect(() => {
    if (reduceMotion || lineIdx >= lines.length) return;

    const cmd = lines[lineIdx].cmd ?? '';
    const timer = setTimeout(
      () => {
        if (charIdx < cmd.length) {
          setCharIdx(charIdx + 1);
        } else {
          setLineIdx(lineIdx + 1);
          setCharIdx(0);
        }
      },
      charIdx < cmd.length ? speed : 450
    );
    return () => clearTimeout(timer);
  }, [lineIdx, charIdx, lines, speed, reduceMotion]);

  const done = lineIdx >= lines.length;

  return (
    <div className="term-window w-full max-w-xl text-sm md:text-base">
      <div className="term-bar">
        <span className="term-dot" style={{ background: '#ff5f56' }} />
        <span className="term-dot" style={{ background: '#ffbd2e' }} />
        <span className="term-dot" style={{ background: '#27c93f' }} />
        <span className="ml-3 text-xs text-secondary-text">{title}</span>
      </div>
      <div className="p-4 md:p-6 leading-relaxed min-h-64">
        {lines.map((line, i) => {
          if (i > lineIdx) return null;
          const typing = i === lineIdx;
          const cmd = typing ? (line.cmd ?? '').slice(0, charIdx) : line.cmd;
          return (
            <div key={i} className="mb-3">
              {line.cmd !== undefined && (
                <div>
                  <span className="text-primary">$</span>{' '}
                  <span className={typing ? 'cursor' : ''}>{cmd}</span>
                </div>
              )}
              {!typing && line.out && (
                <div className="text-secondary-text">{line.out}</div>
              )}
            </div>
          );
        })}
        {done && (
          <div>
            <span className="text-primary">$</span> <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
