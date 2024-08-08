import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
          {/* <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0pr5xCHpaTGv12l73IExOHDJisBP2FK4&callback=initGoogleMap"
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery.js" strategy="lazyOnload" />
          {/* <script src="/js/main.js" strategy="lazyOnload" /> */}
          <script src="/js/modernizr-2.6.2.min.js" strategy="lazyOnload" />
        </body>
      </Html>
    );
  }
}
