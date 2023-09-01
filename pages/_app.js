import React, { useEffect } from 'react'
import '../styles/globals.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
