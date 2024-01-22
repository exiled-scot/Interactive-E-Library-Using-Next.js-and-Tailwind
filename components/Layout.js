import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
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

      <style jsx>{`
        html,
        body {
          min-height: 100%;
        }

        .flex-grow {
          flex-grow: 1;
        }

        .mt-auto {
          margin-top: auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
