import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal flex flex-col h-max footer-center bg-primary text-primary-content p-10">
      <aside>
        <div className="w-20 h-20">
          <Image
            src="/logo.svg"
            alt="hero"
            width={500}
            height={500}
            className="h-full w-full object-cover invert saturate-0 mix-blend-screen"
            layout="responsive"
          />
        </div>
        <p className="font-bold pt-10">
          Alacrity Education
          <br />
          <span className="font-normal">
            Promoting high-quality STEAM education
          </span>
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/alacrity_education/"
            className="h-10 w-10 sm:h-5 sm:w-5"
          >
            <Image
              src="instagram.svg"
              height={500}
              width={500}
              alt="ig"
              className="h-full w-full scale-150 invert"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}
