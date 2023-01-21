import "@icon/icofont/icofont.css";
import Layout from "../components/layout/layout.component";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
