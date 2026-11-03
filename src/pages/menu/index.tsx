import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

import withPageTransition from '../../components/hoc/with-page-transition';
import { navVariants } from '../../components/menu/Menu.animation';
import InfoSection from './info-section/InfoSection';
import TileSection from './tile-section/TileSection';

/**
 * Menu of the website.
 */
const Menu: React.FC<React.PropsWithChildren> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <>
      <Head>
        <title>Krishna Kishore&apos;s Portfolio and Blog</title>
        <meta
          property="og:title"
          content="Krishna Kishore's Portfolio and Blog"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}}`}
        />

        <meta
          name="twitter:title"
          content="Krishna Kishore's Portfolio and Blog"
        />
        <meta
          name="twitter:description"
          content="Krishna Kishore's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Krishna Kishore's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
        />
        <meta name="author" content="Tummala Krishna Kishore" />
      </Head>
      <motion.nav
        className="fixed top-0 left-0 w-screen h-screen bg-dark flex flex-col lg:flex-row flex-wrap z-20 shadow-md"
        variants={navVariants}
        initial={'closed'}
        animate={isMenuOpen ? 'open' : 'closed'}>
        <InfoSection />
        <TileSection
          closeMenu={() => {
            setIsMenuOpen(false);
          }}
        />
      </motion.nav>
    </>
  );
};

export default withPageTransition(Menu);
