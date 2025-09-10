import Image from "next/image";
import { Suspense } from "react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}


  const members: TeamMember[] = [
    {
      name: "Vavilov Iris",
      role: "Founder and CEO",
      image: "/team/iris.jpg",
    },
    {
      name: "Heroiu Justinian",
      role: "Founder and Research lead.",
      image: "/team/justin.png",
    },
    {
      name: "Alexa Gabriela",
      role: "Founder and COO",
      image: "/team/tina.jpg",
    },
    {
      name: "Sainenco Luchian",
      role: "Founder and CTO",
      image: "/team/luca.png",
    },
    {
      name: "Mușel Răzvan",
      role: "Project Manager",
      image: "/team/musel.jpg",
    },
    {
      name: "Ionescu Andrei",
      role: "Software Developer",
      image: "/team/stefan.jpg",
    },
    {
      name: "Druică Adina",
      role: "Graphic Designer",
      image: "/team/adina.jpg",
    },
    {
      name: "Sima Bianca",
      role: "Student Researcher",
      image: "/team/bianca.png",
    },
    {
      name: "Tudor Zgîmbău",
      role: "Manager & economist",
      image: "/team/tudor.jpeg",
    },
    {
      name: "Stoica Mihai",
      role: "Trainer",
      image: "/team/mihai.jpg",
    },
  ];


export default async function Team() {



  return (
    <div className="h-max bg-base-200 flex flex-col items-center py-10 ">
      <div className="text-2xl md:text-4xl lg:text-5xl font-semibold py-10">
        Meet the team behind <span className="text-primary">Alacrity</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}


const TeamMember = async ({name, role, image }: TeamMember) => {
  return (
 
    <div className="h-64 w-40 md:h-64 md:w-64 p-4 flex flex-col gap-2 items-center justify-center">
      <div className="avatar">
        <div className="w-32 h-32 rounded  relative">

          <Image
            loading="lazy"
            src={image || "/Falcon.svg"}
            height={1000}
            width={1000}
            alt={name}
              placeholder="blur"
          blurDataURL="/Falcon.svg"
            className="h-full w-full object-cover absolute z-10"
          />
        <Image alt="falcon" height={500} width={500} className="h-full w-full object-cover relative " src="/Falcon.svg"/>
        </div>
      </div>
      <div className="text-sm sm:text-md font-bold text-center">{name}</div>
      <div className="text-xs sm:text-sm">{role || "volunteer"}</div>
    </div>
   
  );
};
