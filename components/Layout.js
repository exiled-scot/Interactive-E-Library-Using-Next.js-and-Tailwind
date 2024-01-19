import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJS Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class='h-16'>
        <Header />
      </header>

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
