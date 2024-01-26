// wc.tsx
import Head from 'next/head';

const WCPage = () => {
  return (
    <div>
      <Head>
        <title>WC Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1>トイレへようこそ！</h1>
      <p>ここはトイレページです。何かトイレに関する内容をここに書くことができます。</p>

      {/* その他のページ内容 */}
    </div>
  );
};

export default WCPage;
