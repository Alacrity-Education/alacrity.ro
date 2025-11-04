"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Partners() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollInterval = setInterval(() => {
      const items = carousel.querySelectorAll(".carousel-item");
      if (items.length === 0) return;

      const itemWidth = items[0].clientWidth;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - 10) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += itemWidth;
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  const partners = [
    {
      href: "https://www.instagram.com/robobadgers/",
      src: "/partners/robo_badgers.png",
      alt: "RoboBadgers robotics team",
    },
    {
      href: "https://magurelesciencepark.ro/",
      src: "/partners/msp.png",
      alt: "Magurele Science Park",
    },
    {
      href: "https://fils.upb.ro/ro/home/",
      src: "/partners/fils.jpg",
      alt: "Faculty of Engineering in Foreign Languages",
    },
    {
      href: "https://www.innovailia.com",
      src: "/partners/innovalia.png",
      alt: "Innovalia",
    },
  ];

  return (
    <div className="w-screen bg-base-100 h-max py-10 z-30 flex flex-col items-center">
      <h2 className="text-3xl sm:text-6xl text-center font-semibold">
        Partners
      </h2>
      <div className="w-full py-6 px-4 sm:px-10">
        <div
          ref={carouselRef}
          className="carousel carousel-center w-full space-x-4 p-4 rounded-box"
        >
          {partners.map((partner, index) => (
            <div key={index} className="carousel-item">
              <PartnerCard
                href={partner.href}
                src={partner.src}
                alt={partner.alt}
              />
            </div>
          ))}
        </div>
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
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image
        className={`object-contain w-32 h-32 sm:h-48 sm:w-48 md:h-64 md:w-64 p-5 bg-white rounded-lg ${className}`}
        src={src}
        alt={alt}
        height={500}
        width={500}
      />
    </Link>
  );
}
