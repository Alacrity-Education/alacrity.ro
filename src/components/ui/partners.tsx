import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="w-screen h-max py-10 ">
      <h1 className="text-3xl sm:text-6xl text-center font-semibold">
        Partners
      </h1>
      <div className="flex flex-col sm:flex-row py-6 gap-2 items-center sm:justify-center">
        <PartnerCard
          href="https://www.instagram.com/robobadgers/"
          src="/partners/robo_badgers.png"
        />
        <PartnerCard
          href="https://fils.upb.ro/ro/home/"
          src="/partners/fils.jpg"
        />
        <PartnerCard
          href="www.innovailia.com"
          src="/partners/innovalia.png"
          className=""
        />
        <PartnerCard href="https://rospin.org/" src="/partners/rospin.png" />
      </div>
    </div>
  );
}

function PartnerCard({
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
        className={`object-contain h-64 w-64 p-5 bg-white ${className}`}
        src={src}
        alt={src}
        height={500}
        width={500}
      />
    </Link>
  );
}
