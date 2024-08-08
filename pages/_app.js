// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/main.css';  
import '../public/css/icomoon.css';
import "../public/css/animations.css";
import "../public/css/font-awesome5.css";
import "../public/css/shop.css";
import "../public/css/style.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
