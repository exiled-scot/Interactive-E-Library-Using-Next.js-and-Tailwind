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
          {/* Render content */}
          <div className="w-full xl:w-5/6">
            {children}
          </div>
          
          {/* Render the sidebar */}
          <div className="w-full xl:w-1/6 xl:px-4">
            <Sidebar className="w-full" />
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
