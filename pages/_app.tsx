import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}