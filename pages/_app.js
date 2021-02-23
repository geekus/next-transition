import App from 'next/app'
import {AnimateSharedLayout, AnimatePresence} from 'framer-motion'

import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <Layout>
        <AnimateSharedLayout>
          <Component {...pageProps} key={this.props.pathname} />
        </AnimateSharedLayout>
      </Layout>
    )
  }
}

export default MyApp
