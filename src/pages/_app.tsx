import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Salvatore Bisconti</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Salvatore Bisconti" />
        <meta httpEquiv="Reply-to" content="salvatorebisconti98@gmail.com" />
        <meta httpEquiv="content-language" content="IT" />
        <meta
          name="keywords"
          content="Salvatore Bisconti, Salvo Bisconti, Front-end developer, developer, siti web, developer, sviluppatore web, web developer, front end developer"
        />
        <meta
          name="description"
          content="Sono Salvatore Bisconti, un front-end developer che ama creare applicazioni web ..."
        />
        <meta
          name="generator"
          content="Salvatore Bisconti - Front-end developer"
        />
        <meta name="robots" content="index,nofollow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff6961" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
