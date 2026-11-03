import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';

import CodeSnippet from '../code-snippet/CodeSnippet';

/**
 * Component overrides for the {@link ReactMarkdown} component.
 */
const components: Components = {
  code({ className, children }) {
    const language = /language-(\w+)/.exec(className || '')?.[1];
    const code = String(children).replace(/\n$/, '');
    // Fenced blocks carry a language class or span multiple lines.
    if (language || code.includes('\n')) {
      return (
        <CodeSnippet
          language={
            language as React.ComponentProps<typeof CodeSnippet>['language']
          }
          code={code}
        />
      );
    }
    return <code>{children}</code>;
  },
  a({ href, children }) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
};

/**
 * Renders markdown as HTML using {@link ReactMarkdown}
 * @param children Markdown content to be rendered.
 */
const MdContent: React.FC<{ children?: string }> = ({ children }) => {
  return (
    <div className="md-content">
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
};

export default MdContent;
