import Image from "next/image";
import {
  Card as ProjectCard,
  CardImage as ProjectCardImage,
  CardBody as ProjectCardBody,
  CardCTA,
} from "@/app/components/ui/primitives/card";

export default function Projects() {
  return (
    <div className="w-screen min-h-max bg-gradient-to-b from-base-300 to-base-100 dark:via-base-300 px-4 pb-10 lg:px-20 h-max">
      <h2 className="text-2xl sm:text-5xl font-semibold py-16 text-center">
        Alacrity Projects.
      </h2>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-6">
        <AirBoxProject />
          <ScienceFair />
      </div>
    </div>
  );
}

export function AirBoxProject() {
  return (
    <ProjectCard>
      <ProjectCardImage>
        <div className=" w-full !h-34 relative bg-primary text-primary-content">
          <Image
            src="/AirBox.svg"
            alt="AirBox Project Image"
            width={1000}
            height={1000}
            className="object-cover h-full w-full object-center rounded-lg absolute -right-1/3 top-0 "
          />
          <div className="text-4xl h-34 relative font-bold z-10 p-4 px-6 h-full flex items-center bg-gradient-to-r from-black/50 to-black/20">
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
          <CardCTA href="/airbox">Read More</CardCTA>
        </div>
      </ProjectCardBody>
    </ProjectCard>
  );
}

export function ScienceFair() {
    return (
        <ProjectCard>
            <ProjectCardImage>
                <div className="h-full w-full relative bg-primary text-primary-content snow  [--snow-scale:250px] [--snow-opacity:0.8] ">
                    <Image
                        src="/sciencefair/tree.png"
                        alt="Science Fair Logo"
                        width={1000}
                        height={1000}
                        className="object-cover brightness-110  h-max w-full object-center rounded-lg scale-75 -top-12 "
                    />
                </div>
            </ProjectCardImage>
            <ProjectCardBody>
                <div className="relative w-full h-full flex flex-col">
                    <h3 className="text-3xl font-semibold">Raven1 Science Fair</h3>
                    <p className="text-base text-base-content pt-2 leading-snug">
                        Spectacular experiments, engineering, and tech. Come explore the science of the holidays!
                    </p>
                    <div className="flex-1"></div>
                    <CardCTA href="/fair">Read More</CardCTA>
                </div>
            </ProjectCardBody>
        </ProjectCard>
    );
}
