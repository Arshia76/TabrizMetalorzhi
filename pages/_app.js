import '../styles/globals.css';
import '../public/Resource/Stylesheets/reset.css';
import '../public/Resource/Stylesheets/config.css';
import '../public/Resource/Stylesheets/fontiran.css';
import '../public/Resource/Stylesheets/responsive.css';
import '@szhsin/react-menu/dist/index.css';
import '../styles/Carousel.css';
import 'leaflet/dist/leaflet.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '../styles/Header.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
