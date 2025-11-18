import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      name: "alacrity-instagram",
      href: "https://www.instagram.com/alacrity_education/",
      image: <FaInstagram className="h-full w-full" />,
      scale: "scale-150",
    },
    {
      name: "alacrity-linkedin",
      href: "https://www.linkedin.com/company/alacrity-education",
      image: <FaLinkedin className="h-full w-full" />,
      scale: "scale-200",
    },
    {
      name: "alacrity-facebook",
      href: "https://www.facebook.com/people/Alacrity-Education/61565652875550/",
      image: <FaFacebook className="h-full w-full" />,
      scale: "scale-175",
    },
  ];

  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 z-30">
        <nav>
          <h6 className="footer-title">Projects</h6>
          <a className="link link-hover">Alacrity AirBox</a>
          <a className="link link-hover">Raven1</a>
          <a className="link link-hover">Raven1 Science Fair</a>
          <a className="link link-hover">Digital Badges</a>
          <a className="link link-hover">Alacrity Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title">NGO</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Become a volunteer</a>
          <a className="link link-hober">Partnerships</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 flex flex-col sm:flex-row items-center gap-4">
        <aside className="flex flex-col sm:flex sm:flex-row items-center ">
          <Image
            className="h-20 w-20 sm:h-12 sm:w-12 sm:scale-100"
            src="/logo.svg"
            height={50}
            width={50}
            alt="alacrity logo footer"
          />
          <p className="text-center sm:text-start">
            <b>Alacrity Education</b>
            <br />
            Changing the education of the future.
          </p>
        </aside>
        <div className="sm:grow"></div>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.image + "" + link.name}
                className="h-10 w-10 p-1 rounded-lg bg-primary/30"
                href={link.href}
              >
                {link.image}
              </Link>
            ))}
          </div>
        </nav>
      </footer>
    </>
  );
}
