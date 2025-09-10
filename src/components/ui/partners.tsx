import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="w-screen h-max py-10 flex flex-col items-center">
      <h2 className="text-3xl sm:text-6xl text-center font-semibold">
        Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row py-6 gap-2 items-center px-10">
        <PartnerCard
          href="https://www.instagram.com/robobadgers/"
          src="/partners/robo_badgers.png"
          alt="RoboBadgers robotics team"
        />
        <PartnerCard
          href="https://fils.upb.ro/ro/home/"
          src="/partners/fils.jpg"
          alt="Faculty of Engineering in Foreign Languages"
        />
        <PartnerCard
          href="https://www.innovailia.com"
          src="/partners/innovalia.png"
          alt="Innovalia"
        />
      </div>
    </div>
  );
}

function PartnerCard({
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
        className={`object-contain w-32 h-32  sm:h-64 sm:w-64 p-5 bg-white ${className}`}
        src={src}
        alt={alt}
        height={500}
        width={500}
      />
    </Link>
  );
}
