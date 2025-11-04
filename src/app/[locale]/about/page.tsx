import Image from "next/image";
import React from "react";
import Link from "next/link";
import { DownArrow, Timeline } from "./components/ui/Timeline";
import AboutHero from "./components/ui/aboutHero";

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
