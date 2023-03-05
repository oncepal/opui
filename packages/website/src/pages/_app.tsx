import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { Container, App as Provider } from '@sui/core';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = {
    darkMode,
    colors: {
      black: '#0e1012',
    },
  };

  return (
    <Layout>
      <Provider theme={theme}>
        <Container relative fullScreen>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Component {...pageProps} />
        </Container>
      </Provider>
    </Layout>
  );
}
