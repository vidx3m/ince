import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";  // ✅ Explicitly import the type

export default function App({ Component, pageProps }: AppProps) {  // ✅ Use AppProps
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
