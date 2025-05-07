import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="w-screen h-max py-10 ">
      <h1 className="text-3xl sm:text-6xl text-center font-semibold">
        Sponsors
      </h1>
      <div className="flex flex-col sm:flex-row  py-6 gap-2 items-center sm:justify-center">
        <SponsorCard href="http://www.rotineret.ro/" src="/sponsors/fnt.png" />
        <SponsorCard
          href="https://bambulab.com/"
          className="grayscale dark:invert"
          src="/sponsors/bambu_lab.png"
        />
      </div>
    </div>
  );
}

function SponsorCard({
  src,
  className,
  href,
}: {
  src: string;
  className?: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <Image
        className={`object-contain h-64 w-64 p-5 ${className}`}
        src={src}
        alt={src}
        height={500}
        width={500}
      />
    </Link>
  );
}
