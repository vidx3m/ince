// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
