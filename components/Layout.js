import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full overflow-x-hidden">
      <Head>
        {/* Head contents */}
      </Head>

      <Header />

      <main className="mt-8 flex-grow pb-16">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-auto">
            {/* Render content */}
            {children}
          </div>
          
          {/* Render the sidebar */}
          <div className="w-full sm:w-auto">
            <Sidebar className="w-64" />
          </div>
        </div>
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
