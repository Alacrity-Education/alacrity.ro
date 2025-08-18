import Showcase from "@/components/ui/showcase";
import Hero from "../../components/ui/hero";
import About from "@/components/ui/about";
import Team from "@/components/ui/team";
import AirBox from "@/components/ui/airbox";
import Gallery from "@/components/ui/gallery";
import Sponsors from "@/components/ui/sponsors";
import Partners from "@/components/ui/partners";
import { Metadata } from "next";

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

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Showcase />
      <AirBox />
      <Sponsors />
      <Partners />
      <Team />
    </>
  );
}
