import React from 'react';
import Head from 'next/head';
import { getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';

import { ChakraProvider, useDisclosure } from '@chakra-ui/react';

import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

// Import CSS
import '../styles/globals.css';
import { UserProvider } from '../context/UserContext';

function MyApp({ Component, pageProps }) {

  const app = initializeApp();

  const auth = getAuth(app);
  
  return(
    <div id="container">
      <Head>
        <title>CampusConnect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <ChakraProvider>
        <>
            <MainNavbar/>
            <UserProvider>
              <div id="main-content"><Component {...pageProps} auth={auth}/></div>
            </UserProvider>
            <Footer/>
        </>
      </ChakraProvider>
    </div>
  )
}

export default MyApp;
