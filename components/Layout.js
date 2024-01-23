import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full overflow-x-hidden">
      <Head>
        {/* Head contents */}
      </Head>

      <Header />

      <main className="flex-grow pb-16">
        {children}
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
