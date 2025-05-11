import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export default function Team() {
  const members: TeamMember[] = [
    {
      name: "Vavilov Iris",
      role: "Founder and CEO",
      image: "/iris.jpg",
    },
    {
      name: "Heroiu Justinian",
      role: "Founder and AirBox Tech Lead",
      image: "/justin.png",
    },
    {
      name: "Alexa Gabriela",
      role: "Founder and COO",
      image: "/tina.jpg",
    },
    {
      name: "Sainenco Luchian",
      role: "Founder and Tech Manager",
      image: "/luca.png",
    },
    {
      name: "Mușel Răzvan",
      role: "Project Manager",
      image: "/musel.jpg",
    },
    {
      name: "Ionescu Andrei",
      role: "Software Developer",
      image: "/stefan.jpg",
    },
    {
      name: "Druică Adina",
      role: "Graphic Designer",
      image: "/adina.jpg",
    },
    {
      name: "Sima Bianca",
      role: "Student Researcher",
      image: "/bianca.png",
    },
    {
      name: "Stoica Mihai",
      role: "Trainer",
      image: "/vlad.jpg",
    },
    {
      name: "Vlad",
      role: "Trainer",
      image: "/mihai.jpg",
    },
  ];

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

const TeamMember = ({ name, role, image }: TeamMember) => {
  return (
    <div className="h-64 w-40 md:h-64 md:w-64 p-4 flex flex-col gap-2 items-center justify-center">
      <div className="avatar">
        <div className="w-32 h-32 rounded">
          <Image
            src={image || "/Falcon.svg"}
            height={500}
            width={500}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="text-sm sm:text-lg font-bold">{name}</div>
      <div className="text-xs sm:text-sm">{role}</div>
    </div>
  );
};
