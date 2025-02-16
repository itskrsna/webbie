import '../../css/theme.scss';
import '../../css/styles.scss';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Footer from '../components/footer/Footer';
import NavBar from '../components/nav-bar/NavBar';
import { GA_TRACKING_ID } from '../lib/ga';
import { trackPageView } from '../lib/ga';
import Menu from './menu/index';

/**
 * This is the root page that envelops the page being navigated to.
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  let toshowMenu;

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (router.asPath === '/' && router.pathname !== '/menu') {
    toshowMenu = (
      <>
        <Menu />
      </>
    );
  } else if (router.pathname !== '/menu') {
    toshowMenu = (
      <>
        <NavBar />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="google-adsense-account" content="ca-pub-2060714502209042"/>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Krishna Kishore's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
        />
        <meta name="author" content="Tummala Krishna Kishore" />

        {/* Open Graph */}
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_DOMAIN}/img/logo-social.png`}
        />
        <meta
          property="article:author"
          content="https://x.com/itskrsnakishore"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kri4shna" />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4629230722874075"
          crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
          }}
        />

        {/* MS Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "7ei0mkvbfa");
              `
          }}
        />
      </Head>
      {toshowMenu}
      <div
        className={
          router.pathname.length > 1 && router.asPath != '/'
            ? 'app-max pt-20'
            : ''
        }>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component key={router.asPath} {...pageProps} one={'one'} />
        </AnimatePresence>
        {router.pathname.length > 1 && router.asPath != '/' ? (
          <Footer />
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default MyApp;
