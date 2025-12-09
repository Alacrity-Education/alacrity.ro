"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Carousel, { CarouselCard } from "./primitives/carousel";

const SCROLL_INTERVAL_MS = 1000;
const SCROLL_THRESHOLD = 1;

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

export default function Sponsors() {
  return (
    <Carousel title="Sponsors" items={sponsors}>
      {sponsors.map((item, index) => (
        <CarouselCard
          key={index + item.alt}
          href={item.href}
          alt={item.alt}
          src={item.src}
        />
      ))}
    </Carousel>
  );
}
