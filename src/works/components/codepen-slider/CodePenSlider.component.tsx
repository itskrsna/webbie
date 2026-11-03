import { motion, type Variants } from 'framer-motion';
import React from 'react';

/**
 * Interface for each pen in the {@link CodePenSlider}
 */
export interface Pen {
  id: string;
  /**
   * The title that appears a separate tile for each slide.
   */
  title: string;
}

/**
 * List of pens to be shown.
 * TODO: Externalize to an API.
 */
const pens: Pen[] = [
  {
    id: 'bGRNZgJ',
    title: 'CSS Only Swinging Girl'
  },
  {
    id: 'OJgPqWr',
    title: 'CSS Only Diwali Fireworks'
  },
  {
    id: 'VwWYRPQ',
    title: 'Christmas Tree and Snow'
  },
  {
    id: 'ExXaMZZ',
    title: 'CSS Only Riding Girl'
  },
  {
    id: 'yLXywgN',
    title: 'CSS WOW Smiley'
  },
  {
    id: 'KKqwEaK',
    title: '3D Ice Cream loving smiley'
  },
  {
    id: 'wveBOzO',
    title: 'SENSEI LOADER CONCEPT'
  },
  {
    id: 'vYZEPXj',
    title: 'Loading Concept - Cat'
  },
  {
    id: 'JjJozRJ',
    title: 'CSS Only Coding Cat animation for Website Under Construction'
  },
  {
    id: 'eYRmXdZ',
    title: 'CSS - Spiral Loader Concept'
  },
  {
    id: 'jOwEJrg',
    title: 'CSS Only - Shader Flower Loader Concept'
  },
  {
    id: 'BaZybzv',
    title: 'Loading Concept - Strings'
  },
  {
    id: 'zYzxbrK',
    title: 'Simple CSS Loader'
  },
  {
    id: 'bGRNZVz',
    title: 'Minimal Portfolio with Transitions'
  },
  {
    id: 'vYZEPNd',
    title: 'Floral Particles'
  },
  {
    id: 'dyRPrYV',
    title: 'CSS Loading Concept'
  },
  {
    id: 'ZEyYPGG',
    title: 'Codevember #2 - CSS Square Loader'
  }
];

/**
 * Variant for the main slier content.
 */
const sliderContentChildrenVariants: Variants = {
  initial: {
    opacity: 0,
    transform: 'translateY(50%)'
  },
  enter: {
    opacity: 1,
    transform: 'translateY(0%)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * The slider in the works page.
 * @param Param of type {@link WorksSliderProps}
 */
const CodePenSlider: React.FC<React.PropsWithChildren> = () => {
  return (
    <motion.div className="flex flex-col">
      <motion.p
        className="text-lg mb-8"
        variants={sliderContentChildrenVariants}>
        I love bringing animations to life through code and regularly post
        on&nbsp;
        <a
          className="ul-hover-effect text-primary"
          target="_blank"
          rel="noreferrer"
          href="http://codepen.io/webruster">
          Codepen
        </a>
        .
        {/* . My pens collectively have over&nbsp;
        <span className="text-secondary">20566</span>
        <span role="img" aria-label="views" className="mx-1">
          👁
        </span>
        &apos;s and over <span className="text-secondary">884</span>
        <span role="img" aria-label="heart" className="mx-1">
          ❤️
        </span>
        &apos;s. */}
      </motion.p>
      <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden ">
        {pens.map((pen) => {
          return (
            <div className="relative -mb-8 " key={pen.id}>
              <div
                className="absolute flex items-center pl-3 text-secondary-text leading-tight"
                style={{
                  top: '1px',
                  left: '1px',
                  width: 'calc(100% - 75px)',
                  height: '50px',
                  background: '#111111'
                }}>
                {pen.title}
              </div>
              <iframe
                height="300"
                className="pr-8 shadow-md"
                style={{
                  maxWidth: '100%',
                  minWidth: '320px',
                  overflow: 'hidden'
                }}
                scrolling="no"
                title="Simple CSS Loader"
                src={`https://codepen.io/webruster/embed/preview/${pen.id}?height=300&theme-id=dark&default-tab=result`}
                allowFullScreen
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CodePenSlider;
