import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div className="min-h-screen flex bg-base-200 flex-col sm:flex-row justify-center items-center">
        <div className="sm:basis-1/2 px-4 sm:pl-20 lg:pl-40 xl:pl-80 pt-10 sm:pt-20 ">
          <div className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl pt-10 font-bold">
            Hi, <br /> we're <span className="text-primary">Alacrity</span>
          </div>
          <div className="text-lg sm:text-4xl pt-10 font-bold">
            Advancing education has always been our mission.
          </div>
          <div className="sm:text-lg pt-4">
            Our history is rooted in{" "}
            <span className="font-semibold text-primary">STEAM</span>
            —Science, Technology, Engineering, Arts, and Mathematics. But more
            than that, we are a team of passionate educators, innovators, and
            learners committed to shaping a better future.
          </div>
          <div className="text-lg mt-2">
            Explore our journey of impact since{" "}
            <span className="text-primary font-semibold">2024</span>.
          </div>
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
              <span className="font-semibold text-primary">Alacrity</span>{" "}
              started as an informal group <br /> at an NGO accelarator
              organised by{" "}
              <span className="text-orange-400 font-bold">FNT</span>
            </HistoryCard>
            <HistoryCard time="October 2024">
              <span className="font-semibold text-primary">Alacrity</span> was a
              member at <span className="text-primary font-bold">FastExpo</span>{" "}
              by RoSpin
            </HistoryCard>
            <HistoryCard time="December 2024">
              <span className="font-semibold text-primary">Alacrity</span> was
              acquired the status of an NGO in just 4 months.
              <br />
              <br />
              The first project -{" "}
              <span className="text-primary font-semibold">
                Alacrity AirBox
              </span>{" "}
              was accepted and sponsored by{" "}
              <span className="font-bold text-orange-400">FNT</span>
              <br />
              <br />
              <span className="text-primary font-bold">
                Micul Electronist
              </span>{" "}
              is now supporting{" "}
              <span className="text-primary font-bold">Alacrity</span>
            </HistoryCard>
            <HistoryCard time="January 2025 - February 2025">
              <span className="text-primary font-semibold">
                Alacrity AirBox
              </span>{" "}
              courses took place for over 4 weeks in both online and on-site
              scenarios featuring hands-on engineering experience.
              <br />
              <br />
              Alacrity was a member at{" "}
              <span className="text-primary font-bold">
                InternationalFest
              </span>{" "}
              by <span className="text-orange-400 font-bold">FILS</span>
            </HistoryCard>
            <HistoryCard time="Mart 2025">
              <span className="text-primary font-semibold">Alacrity</span>{" "}
              obtained a sponsorship from{" "}
              <span className="text-green-400 font-semibold">Bambu Lab</span>. A
              brand new 3D printer is now supporting further 3D modeling courses
              and shared with other NGO's at{" "}
              <span className="text-orange-400 font-bold">FNT</span>
              <br />
              <br />
              Alacrity was a member at{" "}
              <span className="text-primary font-bold">PoliFest</span> by{" "}
              <span className="text-blue-400 font-bold">
                University Politehnica Bucharest
              </span>
            </HistoryCard>
            <HistoryCard time="April 2025">
              <span className="font-semibold text-primary">Alacrity</span>{" "}
              inspired hundreds of high schoolers at{" "}
              <span className="text-primary font-bold">Caravana RoSpin</span>
            </HistoryCard>
            <HistoryCard time="May 2025">
              <span className="font-semibold text-primary">Alacrity</span>{" "}
              secured a great sponsorship from{" "}
              <span className="text-blue-500 font-bold">Adonstar</span>
            </HistoryCard>
            <HistoryCard time="May 2025">
              <span className="font-semibold text-primary">Alacrity</span>{" "}
              secured a sponsorship from{" "}
              <span className="text-red-400 font-bold">UNI-T</span>
            </HistoryCard>
          </div>
        </div>
      </div>
    </>
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
