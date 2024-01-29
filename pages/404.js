import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const Custom404 = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || router.pathname !== '/404') {
    return null; // Don't render anything while loading or if not on the custom 404 page
  }

  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className={`text-base font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>404</p>
          <h1 className={`mt-4 text-3xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'} sm:text-5xl`}>Page not found</h1>
          <p className={`mt-6 text-base leading-7 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <span>Go back home</span>
            </button>

            <a href="/support/contact" className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;
