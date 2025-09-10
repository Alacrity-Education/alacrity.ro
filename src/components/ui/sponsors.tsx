import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="w-screen h-max py-10 flex flex-col items-center ">
      <h2 className="text-3xl sm:text-6xl text-center font-semibold">
        Sponsors
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row py-6 gap-2 items-center px-10">
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
        className={`object-contain w-32 h-32 sm:h-64 sm:w-64 p-5 bg-white ${className}`}
        src={src}
        alt={alt}
        height={500}
        width={500}
      />
    </Link>
  );
}
