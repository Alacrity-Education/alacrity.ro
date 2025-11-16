import Image from "next/image";
import Link from "next/link";
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
    <div className="w-screen min-h-max bg-gradient-to-b from-base-300 to-base-100 dark:via-base-300 px-4 pb-10 lg:px-20 h-max">
      <h2 className="text-2xl sm:text-5xl font-semibold py-16 text-center">
        Alacrity Projects.
      </h2>
      <div className="flex flex-row justify-center gap-6">
        <AirBoxProject />
      </div>
    </div>
  );
}

export function ProjectCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-96 w-80 flex flex-col relative overflow-clip p-3 bg-base-100 border-2 border-primary/20  shadow-2xl rounded-2xl">
      {children}
    </div>
  );
}

export function ProjectCardImage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-52 w-full relative max-w-full overflow-clip rounded-xl">
      {children}
    </div>
  );
}

export function ProjectCardBody({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-full w-full relative pt-4 rounded-lg">{children}</div>
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
  return (
    <ProjectCard>
      <ProjectCardImage>
        <div className="h-full w-full relative bg-primary text-primary-content">
          <Image
            src="/AirBox.svg"
            alt="AirBox Project Image"
            width={1000}
            height={1000}
            className="object-cover h-full w-full object-center rounded-lg absolute -right-1/3 top-0 "
          />
          <div className="text-4xl relative font-bold z-10 p-4 px-6 h-full flex items-center bg-gradient-to-r from-black/50 to-black/20">
            50+ <br /> students
          </div>
        </div>
      </ProjectCardImage>
      <ProjectCardBody>
        <div className="relative w-full h-full flex flex-col">
          <h3 className="text-3xl font-semibold">AirBox</h3>
          <p className="text-base text-base-content pt-2 leading-snug">
            Our flagship <b>STEAM</b> courses. Teaching students all they need
            to know to build an <b>AirBox</b>, from the electron to the
            microcontroller.
          </p>
          <div className="flex-1"></div>
          <Link href="/airbox" className="btn btn-block btn-primary rounded-xl">
            Read More
          </Link>
        </div>
      </ProjectCardBody>
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
