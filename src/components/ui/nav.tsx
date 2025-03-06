import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar fixed bg-base-100 shadow-sm px-2 py-2 z-50">
      <div className="flex-1 h-max">
        <a className="btn btn-ghost text-xl text-primary">Alacrity Education</a>
      </div>
      <div className="flex-none flex gap-2">
        <a href="https://blog.alacrity.ro" className="btn btn-ghost  ">
          Blog
        </a>
        <a
          href="https://buymeacoffee.com/alacrity_education"
          className="btn btn-primary "
        >
          Donate
        </a>
      </div>
    </div>
  );
}
