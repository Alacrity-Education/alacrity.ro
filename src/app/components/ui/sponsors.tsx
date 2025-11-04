"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SCROLL_INTERVAL_MS = 1000;
const SCROLL_THRESHOLD = 1;

export default function Sponsors() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isHovered) return;

    const scrollInterval = setInterval(() => {
      const items = carousel.querySelectorAll(".carousel-item");
      if (items.length === 0) return;

      const itemWidth = items[0].clientWidth;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - SCROLL_THRESHOLD) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += itemWidth;
      }
    }, SCROLL_INTERVAL_MS);

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  const sponsors = [
    {
      href: "http://www.rotineret.ro/",
      alt: "Fundatia Nationala Pentru Tineret",
      src: "/sponsors/fnt.png",
    },
    {
      href: "https://fundatiacomunitarabucuresti.ro/",
      alt: "Fundatia Comunitara Bucuresti",
      src: "/sponsors/fundatiacomunitara.png",
    },
    {
      href: "https://educlick.ro/",
      alt: "EduClick Sponsorizare Calculatoare",
      src: "/sponsors/educlick.png",
    },
    {
      href: "https://bambulab.com/",
      alt: "Bambulab",
      src: "/sponsors/bambu_lab.png",
    },
    {
      href: "https://andonstar.com/",
      alt: "andonstar",
      src: "/sponsors/adonstar.png",
    },
    {
      href: "https://www.uni-trend.com/",
      alt: "uni-trend",
      src: "/sponsors/unit.png",
    },
    {
      href: "https://www.jbctools.com",
      alt: "JBC The Soldering Co.",
      src: "/sponsors/JBC-the-soldering-co.svg",
    },
  ];

  return (
    <div className="w-screen z-20 bg-base-100 h-max py-10 flex flex-col items-center">
      <h2 className="text-3xl sm:text-6xl text-center font-semibold">
        Sponsors
      </h2>
      <div className="w-full py-6 px-4 sm:px-10">
        <div
          ref={carouselRef}
          className="carousel carousel-center w-full space-x-4 p-4 rounded-box"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} className="carousel-item">
              <SponsorCard
                href={sponsor.href}
                alt={sponsor.alt}
                src={sponsor.src}
              />
            </div>
          ))}
        </div>
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
