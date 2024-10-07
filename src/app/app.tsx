// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from '@/app/layout';
import '../styles/globals.css'; // Nếu bạn dùng SCSS hoặc CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
