import '../styles/globals.css';
import Layout from '../components/Layout';
import useMediaQuery from "../hooks/useMediaQuery";

function MyApp({ Component, pageProps }) {
  const isPhone = useMediaQuery('(max-width: 415px)');

  return (
    <Layout isPhone={isPhone}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
