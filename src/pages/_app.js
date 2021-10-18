import Theme from '../styles/theme';
import 'antd/dist/antd.css';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 