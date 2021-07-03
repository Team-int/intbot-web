import '../styles/globals.css'
import NavigationBar from '../components/header'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <NavigationBar></NavigationBar>
        <br /><br /><br />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp