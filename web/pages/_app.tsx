import Head from "next/head"
import type { AppProps } from "next/app"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
