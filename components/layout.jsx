import Head from 'next/head'
//import styles from './layout.module.css';
// import HeaderNavigation from "./shared/headerNavigation";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>D. Thank you notes October</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <meta property="og:url" content="https://www.policandre.ro/" /> */}
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        {/* <meta property="og:title" content="Policandre și Clopote produse în Federația Rusă, clasa Premium." />
          <meta name="twitter:card" content="Policandre și Clopote produse în Federația Rusă, clasa Premium. Confecționate de către ortodocși pentru ortodocși!" />
          <meta property="og:description" content="Policandre și Clopote produse în Federația Rusă, clasa Premium. Confecționate de către ortodocși pentru ortodocși!" /> */}
        {/* <meta property="og:image" content="https://storage.googleapis.com/rbells/assets/img/policandre_bg_4.jpg" /> */}
        {/* <meta property="og:image" content="https://storage.googleapis.com/rbells/policandre_ro/img/policandre_2.jpeg" /> */}
        {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link> */}
      </Head>

      {/* <HeaderNavigation /> */}
      <main>{children}</main>
    </>
  )
}
