import Showcase from "@/app/components/ui/showcase";
import About from "@/app/components/ui/about";
import Team from "@/app/components/ui/team";
import AirBox from "@/app/components/ui/airbox";
import Gallery from "@/app/components/ui/gallery";
import Sponsors from "@/app/components/ui/sponsors";
import Partners from "@/app/components/ui/partners";
import { Metadata } from "next";
import HomeHero from "../components/ui/homeHero";

export const metadata: Metadata = {
  keywords: [
    "Education",
    "Science",
    "STEAM",
    "Soldering Station",
    "Soldering Irons",
    "Soldering Microscopes",
    "Lab",
    "Oscilloscopes",
    "3D Printing",
  ],
};

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="relative z-0 ">
        <HomeHero />
        <About />
        <Gallery />
      </div>

      <Showcase />
      <AirBox />
      <Sponsors />
      <Partners />
      <Team />
    </div>
  );
}
