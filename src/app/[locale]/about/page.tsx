import Image from "next/image";
import React from "react";
import Link from "next/link";
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

function Timeline() {
  return (
    <div className="relative h-[70vh] w-full bg-base-200 flex flex-col items-start p-10 border-4 border-primary rounded-lg shadow-xl">
      <div
        style={{ scrollbarGutter: "stable" }}
        className="max-w-full h-full  overflow-x-scroll absolute top-0 left-0 scrollbar-visible"
      >
        <div className="relative w-max min-w-screen h-max p-10   ">
          <div className="w-full h-1 bg-black dark:bg-white"></div>
          <div className="flex flex-row gap-4">
            <HistoryCard time="August 2024">
              <b className="font-semibold text-primary">Alacrity</b> started as
              an informal group <br /> at an NGO accelarator organised by{" "}
              <b className="text-orange-400 font-bold">
                The National Youth Foundation (FNT)
              </b>
            </HistoryCard>
            <HistoryCard time="October 2024">
              <b className="font-semibold text-primary">Alacrity</b> was a
              member at <b className="text-primary font-bold">FastExpo</b> by
              <b> ROSPIN</b>
            </HistoryCard>
            <HistoryCard time="December 2024">
              <b className="font-semibold text-primary">Alacrity</b> was
              acquired the status of an NGO in just 4 months.
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
            </HistoryCard>
            <HistoryCard time="January 2025 - February 2025">
              <b className="text-primary font-semibold">Alacrity AirBox</b>{" "}
              courses took place for over 4 weeks in both online and on-site
              scenarios featuring hands-on engineering experience.
              <br />
              <br />
              Alacrity was a member at{" "}
              <b className="text-primary font-bold">
                InternationalFest
              </b> by{" "}
              <b className="text-orange-400 font-bold">
                Faculty of Engineering in Foreign Languages (UNSTPB FILS)
              </b>
            </HistoryCard>
            <HistoryCard time="Mart 2025">
              <b className="text-primary font-semibold">Alacrity</b> obtained a
              sponsorship from{" "}
              <b className="text-green-400 font-semibold">Bambu Lab</b>. A brand
              new 3D printer is now supporting further 3D modeling courses and
              shared with other NGO's at{" "}
              <b className="text-orange-400 font-bold">FNT</b>
              <br />
              <br />
              Alacrity was a member at{" "}
              <b className="text-primary font-bold">PoliFest</b> by{" "}
              <b className="text-blue-400 font-bold">
                University Politehnica Bucharest
              </b>
            </HistoryCard>
            <HistoryCard time="April 2025">
              <b className="font-semibold text-primary">Alacrity</b> presented
              their initiatives before hundreds of students of some of the most
              prestigious high schools in Romania during the{" "}
              <b className="text-primary font-bold">ROSPIN Caravan</b>
            </HistoryCard>
            <HistoryCard time="May 2025">
              <b className="text-blue-500 font-bold">Adonstar</b> and{" "}
              <b className="text-red-400 font-bold  break-keep">UNI-T</b> are
              now official sponsors of the{" "}
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
              <b className="text-cyan-600 font-bold">
                {" "}
                Baret Scholars Graduation
              </b>
            </HistoryCard>
            <HistoryCard time="June 2025">
              We secured a long-term partnership deal with{" "}
              <b className="text-red-600 font-bold">JBC Soldering</b>, providing
              us with high-end soldering equipment.
              <br />
              <br />
              Our initiative to start a{" "}
              <b className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
                VEXU robotics team
              </b>{" "}
              is sponsored by <b className="text-orange-400">ING</b>
            </HistoryCard>
            <HistoryCard time="July 2025">
              <b className="font-semibold text-primary">Alacrity</b> organizes a
              science collage workshop.
              <br />
              <br />
              We started researching <b>microplastics in students' food</b>.
            </HistoryCard>
            <HistoryCard time="August 2025">
              <b className="font-semibold text-primary">Alacrity</b> was a
              member of <b>Robotics for all</b> by{" "}
              <b className="text-red-400 font-bold">Boogeybots</b>
            </HistoryCard>
            <HistoryCard time="September 2025">
              <b className="font-semibold text-primary">Alacrity</b> secured a
              partnership with{" "}
              <b className="text-yellow-500 font-semibold">
                Magurele Science Park
              </b>
              <br />
              <br />
              We started researching the <b>financial needs of the youth</b>
              <br />
              <br />
              Our team is picked to present for{" "}
              <b className="text-orange-400">ING international directors</b> at
              the <b>ING Hubs event</b>.
              <br />
              <br />
              <b className="font-semibold text-primary">Alacrity</b> establishes
              one of the first{" "}
              <b className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary">
                VEXU teams
              </b>{" "}
              in Romania
            </HistoryCard>
          </div>
        </div>
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

        <DownArrow />
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

function HistoryCard({
  time,
  children,
}: {
  time: String;
  children: React.ReactNode;
}) {
  return (
    <div className="relative border-l-4  w-64 sm:w-96  h-max py-4 border-black dark:border-white border-solid">
      {/* <div className="absolute h-5 w-5 rounded-full bg-black dark:bg-white -left-2 -top-2"></div> */}
      <div className="p-4">
        <div className="badge badge-primary badge-sm sm:badge-md text-base-300 shadow-lg">
          {time}
        </div>
        <div className="sm:text-lg pt-4">{children}</div>
      </div>
    </div>
  );
}

const DownArrow = () => {
  return (
    <a
      href="#timeline"
      className=" hidden sm:block absolute bottom-10 hover:animate-bounce"
    >
      <svg
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-16 w-16 fill-primary/70 "
      >
        <polygon
          points="17,12 17,13 15,13 15,15 13,15 13,3 11,3 11,15 9,15 9,13 7,13 7,12 5,12 5,15 7,15 7,17 9,17 9,19 10,19 10,20 
	11,20 11,21 13,21 13,20 14,20 14,19 15,19 15,17 17,17 17,15 19,15 19,12 "
        />
      </svg>
    </a>
  );
};
