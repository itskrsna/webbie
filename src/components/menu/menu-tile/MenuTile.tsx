import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import { addCamelCaseKeys } from '../../../lib';
import s from './MenuTile.module.scss';

const MotionLink = motion.create(Link);

const directions = {
  top: {
    open: {
      y: 0
    },
    closed: {
      y: '100%'
    }
  },
  right: {
    open: {
      x: 0
    },
    closed: {
      x: '100%'
    }
  },
  bottom: {
    open: {
      y: 0
    },
    closed: {
      y: '-100%'
    }
  },
  left: {
    open: {
      x: 0
    },
    closed: {
      x: '-100%'
    }
  }
};

/**
 * Props for the {@link MenuTile} component.
 */
interface MenuTileProps {
  /**
   * The direction from which menu tile slides from.
   */
  direction: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The title of the tile.
   */
  title: string;

  /**
   * The sub title of the tile.
   */
  subTitle: string;

  /**
   * The url of the page.
   */
  url: string;

  /**
   * The theme of the tile.
   */
  theme: 'primary' | 'secondary';

  /**
   * Function to be called menu tile is clicked.
   */
  onClick: () => unknown;

  /**
   * Whether the menu is open. Drives the tile's animation state.
   */
  isOpen?: boolean;
}

/**
 * The individual menu tiles with the tile section of the menu.
 * @param Params of type {@link MenuTileProps}.
 */
const MenuTile: React.FC<MenuTileProps> = ({
  direction,
  title,
  subTitle,
  url,
  theme,
  onClick = () => ({}),
  isOpen = true
}) => {
  const animate = isOpen ? 'open' : 'closed';
  const styles = useMemo(() => addCamelCaseKeys(s), []);
  const router = useRouter();

  const variants: Variants = {
    open: {
      opacity: 1,
      ...directions[direction].open,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    closed: {
      opacity: 0,
      ...directions[direction].closed,
      transition: {
        duration: 0.5
      }
    }
  };

  const contentVariants: Variants = {
    open: {
      opacity: 1,
      ...directions[direction].open,
      transition: {
        duration: 0.9,
        bounce: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    closed: {
      opacity: 0,
      ...directions[direction].closed
    }
  };

  return (
    <div className={`${styles.tile} w-1/2 overflow-hidden`}>
      <motion.div
        className={`flex h-full flex-col justify-end px-4 py-8 bg-dark-shade text-primary border border-dark-tint hover:border-primary transition-colors`}
        variants={variants}
        initial="closed"
        animate={animate}>
        <MotionLink
          href={url}
          className={`${styles.textFill} ${
            theme === 'primary'
              ? styles.textFillSecondary
              : styles.textFillPrimary
          } text-${theme} block text-2xl lg:text-4xl font-black lowercase cursor-pointer`}
          variants={contentVariants}
          initial="closed"
          animate={animate}
          title={`~/${title.toLowerCase()}`}
          onClick={(event) => {
            onClick();
            setTimeout(() => router.push(url), 300);
            event.preventDefault();
          }}>
          ~/{title.toLowerCase()}
        </MotionLink>
        <motion.p
          className={`text-sm text-${theme} lg:text-base opacity-80`}
          variants={contentVariants}
          initial="closed"
          animate={animate}>
          {`# ${subTitle}`}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MenuTile;
