import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer  footer-center bg-slate-50 dark:bg-[#1e1f24] text-primary-content dark:text-gray-200 p-10">
        <div className="flex flex-col gap-y-10 content-center items-center md:flex-row justify-between md:px-20 w-full">
          <aside>
            <div className="text-gray-500 dark:text-gray-200">
              <div>
                <Link to="/">
                  {" "}
                  <h2 className="cursor-pointer baskerville-font mt-5 text-3xl font-semibold text-sky-500 dark:text-sky-300">
                    Dream
                    <span className="text-sky-400 dark:text-sky-200">Jobs</span>
                  </h2>
                </Link>
              </div>

              <p className="mt-2 text-gray-500 dark:text-gray-300">
                {" "}
                Providing reliable jobs since 2024
              </p>
            </div>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <Link to="/">
                <BsTwitterX className="text-2xl" />
              </Link>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </div>
            <div></div>
          </nav>
        </div>
        <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}, Dream Jobs - All right
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
