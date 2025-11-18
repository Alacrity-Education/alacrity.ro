import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 dark:bg-base-300 shadow-sm fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul className="menu dropdown-content bg-base-300 rounded-box z-1 mt-5 w-52 p-2 shadow">
            <li>
              <details>
                <summary>Projects</summary>
                <ul className="p-2">
                  <li>
                    <a>Airbox</a>
                  </li>
                  <li>
                    <a>Raven1 Science Fair</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Raven1</summary>
                <ul className="p-2">
                  <li>
                    <a>Landing</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="https://blog.alacrity.ro"> Alacrity Blog</Link>
            </li>
            <li>
              <Link href="/about" className="">
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Alacrity Education
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-10">
          <li className="">
            <details>
              <summary>Projects</summary>
              <ul className="p-2 bg-base-300 w-52">
                <li>
                  <a>Airbox</a>
                </li>
                <li>
                  <a>Raven1 Science Fair</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="https://blog.alacrity.ro" className="">
              RAVEN1 Robotics
            </Link>
          </li>
          <li>
            <Link href="https://blog.alacrity.ro" className=" ">
              Alacrity Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://buymeacoffee.com/alacrity_education?status=1"
          className="btn btn-primary"
        >
          Donate
        </a>
      </div>
    </div>
  );
}
