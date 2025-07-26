import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="w-screen h-max py-10 ">
      <h1 className="text-3xl sm:text-6xl text-center font-semibold">
        Sponsors
      </h1>
      <div className="flex flex-col sm:flex-row py-6 gap-2 items-center sm:justify-center">
        <SponsorCard
          href="http://www.rotineret.ro/"
          className=""
          alt="Fundatia Nationala Pentru Tineret"
          src="/sponsors/fnt.png"
        />
        <SponsorCard
          href="https://bambulab.com/"
          className=""
          alt="Bambulab"
          src="/sponsors/bambu_lab.png"
        />
        <SponsorCard
          href="https://andonstar.com/"
          className=""
          alt="andonstar"
          src="/sponsors/adonstar.png"
        />
        <SponsorCard
          href="https://www.uni-trend.com/"
          className=""
          alt="uni-trend"
          src="/sponsors/unit.png"
        />
        <SponsorCard
          href="https://www.jbctools.com"
          className=""
          alt="JBC The Soldering Co."
          src="/sponsors/JBC-the-soldering-co.svg"
        />
      </div>
    </div>
  );
}

function SponsorCard({
  src,
  className,
  href,
  alt,
}: {
  src: string;
  className?: string;
  href: string;
  alt: string;
}) {
  return (
    <Link href={href}>
      <Image
        className={`object-contain h-64 w-64 p-5 bg-white ${className}`}
        src={src}
        alt={alt}
        height={500}
        width={500}
      />
    </Link>
  );
}
