import Document, { Head, Html, Main, NextScript } from 'next/document';

/**
 * The document of the application.
 */
class MyDocument extends Document {
  render(): React.JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="About KK" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="About KK" />
          <meta
            name="description"
            content="Krishna Kishore's portfolio and blog where you can get to know about him, what he is upto and pick up a trick or two from his blog posts which are mostly about web development."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#0b0f14" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body className={'font-sans text-base text-white bg-dark'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
