import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="min-h-screen flex bg-base-200 flex-col sm:flex-row justify-center items-center relative">
        <BackToHome />
        <div className="sm:basis-1/2 px-4 sm:pl-20 lg:pl-40 xl:pl-80 pt-10 sm:pt-20 ">
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl pt-10 font-bold">
            Hi, <br /> we're <b className="text-primary">Alacrity</b>
          </h1>
          <p className="text-lg sm:text-4xl pt-10 font-bold">
            Advancing education has always been our mission.
          </p>
          <p className="sm:text-lg pt-4">
            Our history is rooted in{" "}
            <span className="font-semibold text-primary">STEAM</span>
            —Science, Technology, Engineering, Arts, and Mathematics. But more
            than that, we are a team of passionate educators, innovators, and
            learners committed to shaping a better future.
          </p>
          <h2 className="text-lg mt-2">
            Explore our journey of impact since{" "}
            <b className="text-primary font-semibold">2024</b>.
          </h2>
        </div>
        <div className="relative sm:basis-1/2 flex justify-center items-center overflow-x-clip pt-10 sm:pt-0">
          <div className="absolute h-full w-full bg-primary rounded-full top-5 left-5 rotate-12 mask-circle opacity-35"></div>
          <Image
            alt="team"
            src="/about/team.jpg"
            className="object-cover w-full px-2 sm:w-3/4 rounded-full relative shadow-xl hover:-translate-1 transition-all"
            height={1000}
            width={1000}
          />
        </div>
      </div>
      <div className=" relative w-full flex justify-center items-center sm:justify-start sm:pl-10 bg-base-200">
        <h1 className="text-4xl font-bold  bg-base-200 text-primary  py-10">
          A brief History
        </h1>
      </div>
      <div className="relative min-h-max bg-base-200 flex flex-col items-start overflow-x-auto">
        <div className="relative w-max min-w-screen h-96 px-10">
          <div className="w-full h-1 bg-black dark:bg-white"></div>
          <div className="flex flex-row">
            <HistoryCard time="August 2024">
              <b className="font-semibold text-primary">Alacrity</b> started as
              an informal group <br /> at an NGO accelarator organised by{" "}
              <b className="text-orange-400 font-bold">FNT</b>
            </HistoryCard>
            <HistoryCard time="October 2024">
              <b className="font-semibold text-primary">Alacrity</b> was a
              member at <b className="text-primary font-bold">FastExpo</b> by
              RoSpin
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
              </b> by <b className="text-orange-400 font-bold">FILS</b>
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
              <b className="font-semibold text-primary">Alacrity</b> inspired
              hundreds of high schoolers at{" "}
              <b className="text-primary font-bold">Caravana RoSpin</b>
            </HistoryCard>
            <HistoryCard time="May 2025">
              <b className="font-semibold text-primary">Alacrity</b> secured a
              great sponsorship from{" "}
              <b className="text-blue-500 font-bold">Adonstar</b>
              <br />
              <br />
              <b className="font-semibold text-primary">Alacrity</b> is building
              the first OpenSource lab in Romania!
              <br />
              <br />
              <b className="font-semibold text-primary">Alacrity</b> secured a
              sponsorship from <b className="text-red-400 font-bold">UNI-T</b>
              <br />
              <br />
              We participtated at
              <b className="text-red-400 font-bold"> Baret Scholars Graduation</b>
            </HistoryCard>
            <HistoryCard time="June 2025">
              <b className="font-semibold text-primary">Alacrity</b> secured a
              sponsorship from <b className="text-red-600 font-bold">JBC</b>

            </HistoryCard>
             <HistoryCard time="July 2025">
              <b className="font-semibold text-primary">Alacrity</b> organisez a science collage workshop.
              <br/>
              <br/>
              We started researching <b>microplastics</b>.
            </HistoryCard>
            <HistoryCard time="August 2025">
              <b className="font-semibold text-primary">Alacrity</b> was a member of <b>Robotics for all</b> by <b className="text-red-400 font-bold">Boogeybots</b>
            </HistoryCard>
            <HistoryCard time="September 2025">
              <b className="font-semibold text-primary">Alacrity</b> secured a partnership with <b className="text-yellow-500 font-semibold">Magurele Science Park</b>
              <br/>
              <br/>
              We started researching the <b>financial needs of the youth</b>.
            </HistoryCard>
          </div>
        </div>
      </div>
    </>
  );
}

function BackToHome(){
  return(
    <Link href="/" className="fixed top-20 right-5 sm:top-25 sm:left-5 backgrop-blur-xl h-10 w-10 z-10 border-2 rounded-sm bg-base-100 shadow-lg hover:bg-primary/20 active:bg-black">
      <Image height={100} width={100} alt="back btn" src="/back.svg" className="object-contain h-full w-full dark:invert "/>
    </Link>
  )
}

function HistoryCard({
  time,
  children,
}: {
  time: String;
  children: React.ReactNode;
}) {
  return (
    <div className="relative border-l-2 w-64 sm:w-96  h-max py-4 border-black dark:border-white border-solid">
      {/* <div className="absolute h-5 w-5 rounded-full bg-black dark:bg-white -left-2 -top-2"></div> */}
      <div className="p-4">
        <div className="badge badge-primary badge-sm sm:badge-md text-base-300">
          {time}
        </div>
        <div className="sm:text-lg pt-4">{children}</div>
      </div>
    </div>
  );
}
