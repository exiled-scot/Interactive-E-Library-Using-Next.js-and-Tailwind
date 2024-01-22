const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-70 text-white px-4 py-6 text-center">
      <div className="mx-4 sm:mx-40">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-left text-lg mb-2">COMPANY</h3>
            <ul className="text-left text-sm">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Interest Based Ads</a></li>
              <li><a href="#">Ad Preferences</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-left text-lg mb-2">WORK WITH US</h3>
            <ul className="text-left text-sm">
              <li><a href="#">Authors</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Authors &amp; ads blog</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-left text-lg mb-2">CONNECT</h3>
            <ul className="text-left text-sm">
              <li><a href="#">Goodreads on Facebook</a></li>
              <li><a href="#">Goodreads on Twitter</a></li>
              <li><a href="#">Goodreads on Instagram</a></li>
              <li><a href="#">Goodreads on LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-left text-lg mb-2">Download the app</h3>
            <ul className="text-left text-sm">
              <li><a href="#">Download app for iOS</a></li>
              <li><a href="#">Download app for Android</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs">&copy; 2024 MyReads</p>
      </div>
    </footer>
  );
};

export default Footer;
