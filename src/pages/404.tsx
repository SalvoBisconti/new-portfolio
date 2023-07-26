import Head from "next/head";
import Button from "@/components/button";
import { linkTo } from "@/utils/func";

export default function error() {
  return (
    <>
      <Head>
        <title>Salvatore Bisconti - Errore</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="IT" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 p-8 ">
          <h2 className="text-4xl text-white md:text-5xl">
            ERRORE{" "}
            <span className="text-6xl text-second md:text-7xl ">404 </span>
          </h2>
          <p className="text-xl mb-6 text-center">
            {" "}
            Qualcosa è andato storto, la pagina non è stata trovata
          </p>
          <Button
            text="Ritorna alla home"
            display="block"
            onClickFunc={() =>
              linkTo("https://dev.salvatorebisconti.com/", "_self")
            }
            icon="arrow"
          />
        </div>
      </div>
    </>
  );
}
