import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Salvo Bisconti</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Salvo Bisconti" />
        <meta httpEquiv="Reply-to" content="salvatorebisconti98@gmail.com" />
        <meta httpEquiv="content-language" content="IT" />
        <meta
          name="keywords"
          content="Salvatore Bisconti, Salvo Bisconti, Front-end developer, developer, siti web, developer, sviluppatore web, web developer, front end developer, frontend, developer palermo, sviluppatore, informatica"
        />
        <meta
          name="description"
          content="Sono Salvo Bisconti, un full-stack developer che ama creare applicazioni web ..."
        />
        <meta
          name="generator"
          content="Salvo Bisconti - Full-stack developer"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#161a1d" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta
          name="google-site-verification"
          content="Igi5ftFzk5usvPS8oDZGvjLML6S81nqZ97HpTEMPiz4"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
