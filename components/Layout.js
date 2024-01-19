import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* Head contents */}
      </Head>

      <header className="h-16">
        {/* Header contents */}
      </header>

      <main className="flex-grow pb-16"> {/* pb-16 adds a padding-bottom of 16px */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
