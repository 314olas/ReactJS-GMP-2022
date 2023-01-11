import '../styles/style.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import { Montserrat } from '@next/font/google'
import { store } from '../store/index';
import { Provider } from 'react-redux';

const MontserratFont = Montserrat()
const Montserrat300 = Montserrat({ weight: '300' })
const Montserrat400 = Montserrat({ weight: '400' })
const Montserrat500 = Montserrat({ weight: '500' })
const Montserrat600 = Montserrat({ weight: '600' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global> {
        `:root {
          --fontBase: ${MontserratFont.style.fontFamily}
          --font300: ${Montserrat300.style.fontFamily};
          --font400: ${Montserrat400.style.fontFamily};
          --font500: ${Montserrat500.style.fontFamily};
          --font600: ${Montserrat600.style.fontFamily};
        }`
      }

      </style>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      
    </>
  )
}
