import Head from "next/head";
import React from "react";
import Footer2 from "../footer/Footer2";
import Header1 from "../header/Header1";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SERVE - On Demand Services Next JS Template</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="assets/images/faviconS.png"
          type="image/gif"
          sizes="20x20"
        />
      </Head>
      <Header1 />
      {children}
      <Footer2 />
    </>
  );
}

export default Layout;
