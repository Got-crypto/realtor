import Router from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import nProgress from 'nprogress'
import Head from 'next/head'

import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
