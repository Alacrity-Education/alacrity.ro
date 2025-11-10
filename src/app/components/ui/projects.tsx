import Image from "next/image";
import {
  FaBatteryFull,
  FaClock,
  FaRegClock,
  FaRegStar,
  FaSolarPanel,
} from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";

export default function Projects() {
  return (
    <div className="w-screen min-h-screen px-4 lg:px-10 bg-base-100">
      <h2 className="text-2xl sm:text-5xl font-semibold py-16 text-center">
        Alacrity Projects.
      </h2>
      <AirBoxProject />
    </div>
  );
}

export function ProjectCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full rounded-lg h-max md:h-[70vh] bg-primary shadow-lg flex flex-col md:grid grid-cols-4 grid-rows-4 gap-4 p-6">
      {children}
    </div>
  );
}

export function ProjectCardCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-full w-full relative max-w-full max-h-full overflow-clip rounded-lg ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export function AirBoxProject() {
  const editionHighlights = [
    {
      highlight: "First Edition",
      backgroundIcon: <FaRegStar className="h-full w-full" />,
    },
    {
      highlight: "5 Stations Built",
      backgroundIcon: <FaSolarPanel className="h-full w-full" />,
    },
    {
      highlight: "50+ Students",
      backgroundIcon: <MdOutlineSchool className="h-full w-full" />,
    },
    {
      highlight: "30 Hours",
      backgroundIcon: <FaRegClock className="h-full w-full" />,
    },
  ];

  return (
    <ProjectCard>
      <ProjectCardCell className="col-span-2  text-primary-content ">
        {/* <div className="text-lg lg:text-xl">Alacrity/</div> */}
        <div className="text-5xl sm:text-2xl md:text-3xl lg:text-7xl font-extrabold tracking-widest font-project">
          AirBox
        </div>
        <p className="sm:text-lg md:text-xl lg:text-2xl tracking-wide ">
          Our flagship STEAM-intensive course.
        </p>
      </ProjectCardCell>

      <ProjectCardCell className="lg:col-span-1 row-span-2">
        <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-4">
          {editionHighlights.map(({ highlight, backgroundIcon }) => (
            <div
              key={highlight}
              className="h-full w-full relative bg-neutral rounded-lg p-1 overflow-clip"
            >
              <div className="h-full w-full  -right-1/3 -bottom-1/3 opacity-50 absolute  text-primary">
                {backgroundIcon}
              </div>
              <div
                key={highlight}
                className=" h-full z-10 w-full rounded-lg p-1 relative text-neutral-content"
              >
                <p className="md:text-md xl:text-2xl font-bold">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </ProjectCardCell>
      <ProjectCardCell className="bg-neutral text-neutral-content  row-span-4">
        <NonProfit className="h-full -translate-x-1/3 left-1/3 bottom-0 translate-y-1/3 scale-150 absolute stroke-primary opacity-40  rotate-25" />
        <div className="z-10 relative p-2 flex flex-col h-full">
          <p className="md:text-lg xl:text-4xl font-semibold">Open Source</p>
          <p className="md:text-lg xl:text-4xl font-semibold">Open Access</p>
          <p className="md:text-lg xl:text-4xl font-semibold">
            Open To Everyone
          </p>
          <p className="text-sm md:text-md pt-2">
            From Stations to Github and collected Data, the entire AirBox
            framework is available to anyone on the internet.
          </p>
          <div className="flex-1"></div>
          {/* <button className="btn btn-block btn-xs btn-neutral">
            website under development
          </button> */}
        </div>
      </ProjectCardCell>

      <ProjectCardCell className="bg-neutral col-span-2 row-span-3 relative">
        <div className="absolute h-full w-full xl:translate-x-1/5 opacity-40 right-0 bottom-0">
          <GiProgression className="h-full w-full right-0 text-primary" />
        </div>
        <div className="z-10 relative p-2 flex flex-col h-full text-neutral-content">
          <p className="md:text-xl xl:text-4xl font-semibold">
            The course
            <br />
            that <span className="text-primary">teaches</span> differently.
          </p>
          <p className="text-sm lg:text-base pt-2 max-w-2/3">
            {/* All in one: an educational kit, a distributed air measuring system
            and an open access data platform. */}
            An <b>educational kit </b>
            that aims to teach high-school students about the <b>environment</b>
            ,<b> programming</b> and <b> networking</b>.
          </p>
          <p className="text-sm lg:text-base max-w-3/5 pt-2">
            <b className="text-primary">Airbox</b> allows high-schoolers to gain
            <b> real-world experience</b> in programming and electronics by
            allowing them to build useful infrastructure together with us, the
            mentors.
          </p>
        </div>
      </ProjectCardCell>
      <ProjectCardCell className="bg-neutral text-neutral-content row-span-2">
        <div className="absolute    w-full h-full   top-0  max-h-full max-w-full overflow-clip"></div>
        <div className="p-2 flex flex-col h-full justify-center items-center relative">
          <div className="h-1/2 w-1/2 relative ">
            <FaBatteryFull className="absolute h-full w-full text-success translate-1" />
            <FaBatteryFull className="relative z-10 h-full w-full text-primary " />
          </div>

          <p className="md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide w-full text-start">
            3 Months
          </p>
          <p className="md:text-md xl:text-2xl text-start w-full">
            A <span className=" font-bold">single</span> charge
          </p>
          <p className="text-sm xl:text-lg w-full text-start">
            Powered by <span className="text-primary font-bold ">recycled</span>{" "}
            lithium batteries
          </p>
        </div>
      </ProjectCardCell>
    </ProjectCard>
  );
}

const NonProfit = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      d="m35.9896 7c14.625 0 29.0104 11.5833 29.0104 28.9583 0 16-12.7511 29.0417-29.0104 29.0417-13.8445 0-26.0666-9.3958-26.0666-23.8838 0-10.4059 8.4357-18.8416 18.8416-18.8416 8.3247 0 15.0733 6.7485 15.0733 15.0733 0 6.6598-5.3988 12.0586-12.0586 12.0586-5.3278 0-9.6469-4.3191-9.6469-9.6469 0-4.2623 3.4552-7.7175 7.7175-7.7175 3.4098 0 6.174 2.7642 6.174 6.174 0 2.7278-2.2114 4.9392-4.9392 4.9392-2.1823 0-3.9578-1.7691-3.9514-3.9514.0053-1.8015 1.213-2.8736 2.8239-2.4426.2681.0717.6559.2764.9406.633.3572.4473.4259.9031.4636 1.3122"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
