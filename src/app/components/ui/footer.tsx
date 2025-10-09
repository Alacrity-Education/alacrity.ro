import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "alacrity-instagram",
      href: "https://www.instagram.com/alacrity_education/",
      src: "/instagram.svg",
      scale: "scale-150",
    },
    {
      name: "alacrity-linkedin",
      href: "https://www.linkedin.com/company/alacrity-education",
      src: "/social-linkedin.svg",
      scale: "scale-200",
    },
    {
      name: "alacrity-facebook",
      href: "https://www.facebook.com/people/Alacrity-Education/61565652875550/",
      src: "/facebook.svg",
      scale: "scale-175",
    },
  ];

  return (
    <footer className="footer sm:footer-horizontal flex flex-col h-max footer-center bg-gradient-to-tr from-neutral to-primary text-primary-content p-10 z-20">
      <aside>
        <div className="w-20 h-20">
          <Image
            src="/logo.svg"
            alt="hero"
            width={500}
            height={500}
            className="h-full w-full object-cover "
            layout="responsive"
          />
        </div>
        <p className="font-bold ">
          Alacrity Education
          <br />
          <span className="font-normal">
            Promoting high-quality STEAM education
          </span>
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 sm:gap-3">
          {socialLinks.map(({ name, href, src, scale }) => (
            <a
              key={name}
              href={href}
              className=" border-1 rounded-lg p-2 border-primary/20 bg-primary/40 hover:bg-primary/60 transition"
            >
              <div className="w-10 h-10 sm:w-5 sm:h-5 p-2 sm:p-0">
                <Image
                  src={src}
                  height={500}
                  width={500}
                  alt={name}
                  className={`h-full w-full object-cover invert ${scale}`}
                />
              </div>
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
}
