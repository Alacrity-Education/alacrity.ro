import Image from "next/image";
import { Suspense } from "react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedinUrl?: string; // Renamed from 'linked' to 'linkedinUrl'
}

const members: TeamMember[] = [
  {
    name: "Vavilov Iris",
    role: "Founder and COO",
    image: "/team/iris.jpg",
    linkedinUrl: "https://www.linkedin.com/in/iris-vavilov/",
  },
  {
    name: "Heroiu Justinian",
    role: "Founder and Research lead.",
    image: "/team/justin.png",
    linkedinUrl: "https://www.linkedin.com/in/heroiu-rares-justinian-021b231bb",
  },
  {
    name: "Alexa Gabriela",
    role: "Founder and CEO",
    image: "/team/tina.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/gabriela-florentina-alexa-37083033a",
  },
  {
    name: "Sainenco Luchian",
    role: "Founder and CTO",
    image: "/team/luca.png",
    linkedinUrl: "https://www.linkedin.com/in/sainenco-luchian-ba879b271/",
  },
  {
    name: "Andreea Ghițǎ",
    role: "Robotics Lead.",
    image: "/team/andreea.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/andreea-ioana-ghita-b5657720b",
  },
  {
    name: "Mușel Răzvan",
    role: "Social Media Manager",
    image: "/team/musel.jpg",
    linkedinUrl: "https://www.linkedin.com/in/r%C4%83zvan-mu%C8%99el-a3618122b",
  },
  {
    name: "Ionescu Andrei",
    role: "Software Developer",
    image: "/team/stefan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ionescuaandrei/",
  },
  {
    name: "Druică Adina",
    role: "Graphic Designer",
    image: "/team/adina.jpg",
    linkedinUrl: "https://www.linkedin.com/in/druicadenisaadina",
  },
  {
    name: "Sima Bianca",
    role: "Student Researcher",
    image: "/team/bianca.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/bianca-ioana-sima-a97073327",
  },
  {
    name: "Tudor Zgîmbău",
    role: "Manager & economist",
    image: "/team/tudor.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/tudor-zgîmbău-a85274234/",
  },
  {
    name: "Stoica Mihai",
    role: "Trainer",
    image: "/team/mihai.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mihai-stoica-0660b9310",
  },
  {
    name: "Masoud Shams",
    role: "Backend Developer",
    image: "/team/masoud.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/masoud-shams",
  },

  {
    name: "Ciprian Dinu",
    role: "Hardware Developer",
    image: "/team/cipriandinu.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/ciprian-andrei-dinu-6b4a629b",
  },

  {
    name: "Mitran Andrei",
    role: "Hardware Developer",
    image: "/team/mitranandrei.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/mitran-andrei",
  },
  {
    name: "Paula Benu",
    role: "Creative Director",
    image: "/team/paula.jpg",
    linkedinUrl: "https://www.instagram.com/perixbanu?igsh=Mmg5MWJtdzN6MmUx",
  },
  {
    name: "Cosmin-Gabriel Cojocaru",
    role: "UI/UX Designer",
    image: "/team/cosmincojocaru.jpeg",
    linkedinUrl:
      "https://www.linkedin.com/in/cosmin-gabriel-cojocaru-698b84269/",
  },
];

export default async function Team() {
  return (
    <div className="z-20 h-max bg-base-100 flex flex-col items-center py-10 ">
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

const TeamMember = async ({ name, role, image, linkedinUrl }: TeamMember) => {
  return (
    <div className="h-64 w-40 md:h-64 md:w-64 p-4 flex flex-col gap-2 items-center justify-center">
      <div className="avatar relative">
        <div className="w-32 h-32 rounded relative">
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
        </div>
      </div>
      <a
        href={linkedinUrl}
        className="text-sm sm:text-md font-bold text-center flex flex-row hover:text-accent cursor-pointer"
      >
        {name}{" "}
        {linkedinUrl && (
          <Image
            src={"/social-linkedin.svg"}
            height={500}
            width={500}
            alt={name}
            className={`h-5 w-5 dark:invert`}
          />
        )}
      </a>
      <div className="text-xs sm:text-sm">{role || "volunteer"}</div>
    </div>
  );
};
