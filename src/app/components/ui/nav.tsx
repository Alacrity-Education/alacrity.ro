import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar fixed bg-base-100 shadow-sm px-2 py-2 z-50">
      <div className="flex-1 h-max">
        <Link href="/" className="btn btn-ghost text-xl text-primary">
          Alacrity Education
        </Link>
      </div>
      <div className="flex-none flex gap-2">
        <a href="https://blog.alacrity.ro" className="btn btn-ghost  ">
          Blog
        </a>
        <Link href="/about" className="btn btn-ghost ">
          About
        </Link>
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
