import Image from "next/image";
import { Suspense } from "react";

interface TeamMember {
  name: string;
  title: string;
  photoUrl?: string;
  id:number;
}


export default async function Team() {

  const members: TeamMember[] = ((await fetch(process.env.WORKSPACE_MEMBERS_URL || "",{ next: { revalidate: 600 } }).then(res => res.json())).users as TeamMember[]).map(
    member => {
      member.photoUrl = `/api/photo?user=${encodeURIComponent(String(member.id))}`
      return member;
    }
  );

  return (
    <div className="h-max bg-base-200 flex flex-col items-center py-10 ">
      <div className="text-2xl md:text-4xl lg:text-5xl font-semibold py-10">
        Meet the team behind <span className="text-primary">Alacrity</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2">
         {members.filter((member)=> member.title && member.title.includes("Founder")).map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
        {members.filter((member)=> !member.title || !member.title.includes("Founder")).map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

const TeamMember = ({ name, title, photoUrl }: TeamMember) => {
  return (
 
    <div className="h-64 w-40 md:h-64 md:w-64 p-4 flex flex-col gap-2 items-center justify-center">
      <div className="avatar">
        <div className="w-32 h-32 rounded  relative">

          <Image
            loading="lazy"
            src={photoUrl || "/Falcon.svg"}
            height={500}
            width={500}
            alt={name}
              placeholder="blur"
          blurDataURL="/Falcon.svg"
            className="h-full w-full object-cover absolute z-10"
          />
        <Image alt="falcon" height={500} width={500} className="h-full w-full object-cover relative " src="/Falcon.svg"/>
        </div>
      </div>
      <div className="text-sm sm:text-md font-bold text-center">{name}</div>
      <div className="text-xs sm:text-sm">{title || "volunteer"}</div>
    </div>
   
  );
};

const ImageLoading = ()=>{
  return(
    <div className="h-full w-full animate-pulse ">
      
    </div>
  )
}
