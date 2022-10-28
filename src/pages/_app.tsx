import '../styles/globals.css'
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { Flowbite } from 'flowbite-react'
import GlobalProvider from 'contexts/globalContext';
import dynamic from 'next/dynamic';

const App: FC<AppProps> = function ({ Component, pageProps }: AppProps) {
  return (
    <Flowbite>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </Flowbite>
  )
}

export default App
