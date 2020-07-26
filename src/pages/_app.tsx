import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import '../../public/iconStyle.css';
import Layout from '../common/components/Layout/Layout';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

export default MyApp;
