import Image from "next/image";
import React from "react";
import Link from "next/link";
import { DownArrow, Timeline } from "./components/ui/Timeline";

export default function About() {
  return (
    <div className="h-max min-h-screen w-screen flex flex-col justify-center">
      <AboutHero />

      <div id="timeline" className="w-full p-4 sm:p-20 pt-0 bg-base-200">
        <h1 className="text-xl sm:text-xl mb-2 md:text-4xl font-bold bg-base-200 text-primary  ">
          Our brief History
        </h1>
        <p className=" mb-5">
          We told you we are not all mouth and no bite…so here’s a timeline of
          our accomplishments to date!
        </p>

        <Timeline />
      </div>
    </div>
  );
}

function AboutHero() {
  return (
    <div className="min-h-screen flex bg-base-200 flex-col sm:flex-row justify-center items-center relative">
      <BackToHome />
      <div className="sm:basis-1/2 px-4 sm:pl-20 lg:pl-40 xl:pl-80 pt-10 sm:pt-20 ">
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl pt-10 font-bold">
          Hi, <br /> we're <b className="text-primary">Alacrity</b>
        </h1>
        <p className="text-lg sm:text-4xl pt-10 font-bold">
          Advancing education has always been our mission.
        </p>
        <p className="sm:text-lg pt-4">
          Our history is rooted in{" "}
          <span className="font-semibold text-primary">STEAM</span>, Science,
          Technology, Engineering, Arts, and Mathematics. But more than that, we
          are a team of passionate educators, innovators, and learners committed
          to shaping a better future.
        </p>
        <h2 className="text-lg mt-2">
          Explore our journey of impact since{" "}
          <b className="text-primary font-semibold">2024</b>.
        </h2>

        <DownBtn />
      </div>
      <div className="relative sm:basis-1/2 flex justify-center items-center overflow-x-clip pt-10 sm:pt-0">
        <div className="absolute h-full w-full bg-primary rounded-full top-5 left-5 rotate-12 mask-circle opacity-35"></div>
        <div className="absolute h-full w-full bg-primary rounded-full top-5 left-5 rotate-12  mask-diamond opacity-80 mix-blend-overlay brightness-200"></div>
        <Image
          alt="team"
          src="/about/team.jpg"
          className="object-cover w-3/4  sm:w-3/4 rounded-full relative shadow-xl hover:-translate-1 transition-all brightness-125"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
}

function BackToHome() {
  return (
    <Link
      href="/"
      className="fixed top-20 right-5 sm:top-25 sm:left-5 backgrop-blur-xl h-10 w-10 z-10 border-2 rounded-sm bg-base-100 shadow-lg hover:bg-primary/20 active:bg-black"
    >
      <Image
        height={100}
        width={100}
        alt="back btn"
        src="/back.svg"
        className="object-contain h-full w-full dark:invert "
      />
    </Link>
  );
}

const DownBtn = () => {
  return (
    <a
      href="#timeline"
      className="h-16 w-16 hidden sm:block absolute bottom-0 hover:animate-bounce"
    >
      <DownArrow className="h-full w-full dark:invert" />
    </a>
  );
};
