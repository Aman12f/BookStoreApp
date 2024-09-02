import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/Aman12f" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.54 2.34 1.1 2.91.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.67-4.57 4.91.36.31.67.92.67 1.85v2.73c0 .27.18.59.69.49A9.99 9.99 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aman-motghare-533b46233" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H13v2.34h.07c.62-1.15 2.14-2.34 4.43-2.34C22.47 8 24 10.21 24 14.13V24h-5v-8.5c0-2.02-.57-3.4-2.12-3.4-2.1 0-2.88 1.52-2.88 3.4V24H7.5V8z"></path>
              </svg>
            </a>
            <a href="mailto:aman.motghare2024@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 13.065L.684 6.4A2.147 2.147 0 0 1 2.077 6h19.846c.734 0 1.388.283 1.893.758l-11.816 6.375zM24 7.608v10.077c0 .98-.796 1.775-1.777 1.775H1.777C.796 19.46 0 18.665 0 17.685V7.608l11.999 6.48 12-6.48z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Aman Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;

