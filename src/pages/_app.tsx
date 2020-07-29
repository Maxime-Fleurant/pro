import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import '../../public/iconStyle.css';
import '../../public/prism.css';
import 'simplebar/dist/simplebar.min.css';
import Layout from '../common/components/Layout';
import Theme from '../common/components/Layout/Theme';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </CacheProvider>
  );
}

export default MyApp;
