"use client";
import React, { useRef } from "react";

const TIMELINE_OBJECT = {
  "August 2024": {
    text: (
      <>
        <b className="font-semibold text-primary">Alacrity</b> started as an
        informal group <br /> at an NGO accelarator organised by{" "}
        <b className="text-orange-400 font-bold">
          The National Youth Foundation (FNT)
        </b>
      </>
    ),
  },
  "October 2024": {
    text: (
      <>
        <b className="font-semibold text-primary">Alacrity</b> was a member at{" "}
        <b className="text-primary font-bold">FastExpo</b> by
        <b> ROSPIN</b>
      </>
    ),
  },
  "December 2024": {
    text: (
      <>
        <b className="font-semibold text-primary">Alacrity</b> was acquired the
        status of an NGO in just 4 months.
        <br />
        <br />
        The first project -{" "}
        <b className="text-primary font-semibold">Alacrity AirBox</b> was
        accepted and sponsored by{" "}
        <b className="font-bold text-orange-400">FNT</b>
        <br />
        <br />
        <b className="text-primary font-bold">Micul Electronist</b> is now
        supporting <b className="text-primary font-bold">Alacrity</b>
      </>
    ),
  },
  "January 2025 - February 2025": {
    text: (
      <>
        <b className="text-primary font-semibold">Alacrity AirBox</b> courses
        took place for over 4 weeks in both online and on-site scenarios
        featuring hands-on engineering experience.
        <br />
        <br />
        Alacrity was a member at{" "}
        <b className="text-primary font-bold">InternationalFest</b> by{" "}
        <b className="text-orange-400 font-bold">
          Faculty of Engineering in Foreign Languages (UNSTPB FILS)
        </b>
      </>
    ),
  },
  "Mart 2025": {
    text: (
      <>
        <b className="text-primary font-semibold">Alacrity</b> obtained a
        sponsorship from{" "}
        <b className="text-green-400 font-semibold">Bambu Lab</b>. A brand new
        3D printer is now supporting further 3D modeling courses and shared with
        other NGO's at <b className="text-orange-400 font-bold">FNT</b>
        <br />
        <br />
        Alacrity was a member at{" "}
        <b className="text-primary font-bold">PoliFest</b> by{" "}
        <b className="text-blue-400 font-bold">
          University Politehnica Bucharest
        </b>
      </>
    ),
  },
  "April 2025": {
    text: (
      <>
        <b className="font-semibold text-primary">Alacrity</b> presented their
        initiatives before hundreds of students of some of the most prestigious
        high schools in Romania during the{" "}
        <b className="text-primary font-bold">ROSPIN Caravan</b>
      </>
    ),
  },
  "May 2025": {
    text: (
      <>
        <b className="text-blue-500 font-bold">Adonstar</b> and{" "}
        <b className="text-red-400 font-bold  break-keep">UNI-T</b> are now
        official sponsors of the{" "}
        <b className="font-semibold text-primary">Alacrity Lab</b>
        ,providing top-of-the-line optical and measuring devices.
        <br />
        <br />
        <b className="font-semibold text-primary">Alacrity </b>
        secured a building at the center of Bucharest to build{" "}
        <b>the first open access lab in Romania</b>
        <br />
        <br />
        <br />
        We participtated at
        <b className="text-cyan-600 font-bold"> Baret Scholars Graduation</b>
      </>
    ),
  },
  "June 2025": {
    text: (
      <>
        We secured a long-term partnership deal with{" "}
        <b className="text-red-600 font-bold">JBC Soldering</b>, providing us
        with high-end soldering equipment.
        <br />
        <br />
        Our initiative to start a{" "}
        <b className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
          VEXU robotics team
        </b>{" "}
        is sponsored by <b className="text-orange-400">ING</b>
      </>
    ),
  },
  "July 2025": {
    text: (
      <>
        <b className="font-semibold text-primary">Alacrity</b> organizes a
        science collage workshop.
        <br />
        <br />
        We started researching <b>microplastics in students' food</b>.
      </>
    ),
  },
  "August 2025": {
    text: (
      <>
        <b className="font-semibold text-primary">Alacrity</b> was a member of{" "}
        <b>Robotics for all</b> by{" "}
        <b className="text-red-400 font-bold">Boogeybots</b>
      </>
    ),
  },
  "September 2025": {
    text: (
      <>
        <b className="font-semibold text-primary">Alacrity</b> secured a
        partnership with{" "}
        <b className="text-yellow-500 font-semibold">Magurele Science Park</b>
        <br />
        <br />
        We started researching the <b>financial needs of the youth</b>
        <br />
        <br />
        Our team is picked to present for{" "}
        <b className="text-orange-400">ING international directors</b> at the{" "}
        <b>ING Hubs event</b>.
        <br />
        <br />
        <b className="font-semibold text-primary">Alacrity</b> establishes one
        of the first{" "}
        <b className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
          VEXU teams
        </b>{" "}
        in Romania
      </>
    ),
  },
};

export function TimelineCard({
  time,
  children,
}: {
  time: String;
  children: React.ReactNode;
}) {
  return (
    <div className="relative  sm:border-l-4  pb-10 sm:pb-0  w-full sm:w-96  h-max py-4 border-primary/70 sm:border-black dark:border-primary sm:border-solid">
      {/* <div className="absolute h-5 w-5 rounded-full bg-black dark:bg-white -left-2 -top-2"></div> */}
      <div className="p-4 relative">
        <div className="h-1 bg-primary w-10 left-0 top-7 absolute sm:hidden"></div>
        <div className=" relative badge badge-primary badge-sm sm:badge-md text-base-300 shadow-lg">
          {time}
        </div>
        <div className="sm:text-lg pt-4">{children}</div>
      </div>
    </div>
  );
}

export function Timeline() {
  const timelineData = Object.entries(TIMELINE_OBJECT);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400; // pixels per click

  const scrollLeft = () => {
    scrollContainerRef.current!.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current!.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative h-[70vh] w-full bg-base-200 flex flex-col items-start p-10 border-4 border-primary dark:border-primary/30 rounded-lg shadow-xl">
      <button
        onClick={scrollLeft}
        className="hidden sm:block btn btn-xl z-10 absolute left-10 bottom-10 btn-circle btn-accent hover:-translate-y-1 transition-all"
      >
        ◀
      </button>
      <div
        ref={scrollContainerRef}
        style={{ scrollbarGutter: "stable" }}
        className="max-w-full h-full w-full sm:w-max overflow-x-scroll absolute top-0 left-0 scrollbar-visible px-4 sm:px-0"
      >
        <div className="relative w-full sm:w-max sm:min-w-screen h-max py-4 sm:p-10 flex flex-row sm:flex-col    ">
          <div className="flex flex-col sm:flex-row gap-4 border-l-4 border-primary sm:border-l-0 sm:border-t-4 sm:border-primary">
            {timelineData.map(([time, { text }]) => (
              <TimelineCard key={time} time={time}>
                {text}
              </TimelineCard>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={scrollRight}
        className="hidden sm:block btn btn-xl z-10 absolute right-10 bottom-10 btn-circle btn-accent hover:-translate-y-1 transition-all"
      >
        ▶
      </button>
    </div>
  );
}
