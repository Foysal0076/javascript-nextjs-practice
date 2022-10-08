import Layout from '../Components/_Common/Layout/Layout'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
