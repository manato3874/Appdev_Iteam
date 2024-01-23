// pages/_app.tsx
import '../styles/globals.css'; // globals.css へのパスを正しく指定
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
