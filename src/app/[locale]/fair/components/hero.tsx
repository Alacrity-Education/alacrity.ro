import Hero, { HeroImage, HeroText } from "@/app/components/ui/primitives/hero";
import Image from "next/image";
import AddToCalendar from "./addToCalendar";

const FAIR_COLOR_1 = "#b67183";
const FAIR_COLOR_2 = "#8a82ae";

export default function FairHero() {
  return (
    <Hero maskType="mask-snowflake">
      <HeroContent />
    </Hero>
  );
}

const HeroContent = () => {
  return (
    <>
      <HeroImage
        src="/sciencefair/tree.png"
        alt="Alacrity Education Logo"
        className="bg-gradient-to-tr from-base-100 to-primary rounded-full shadow-2xl scale-75 md:scale-100"
      />

      <HeroText>
        <h1 className="text-3xl md:text-3xl lg:text-5xl tracking-wide font-bold  text-base-content/95 sm:text-base-content/90  sm:text-start sm:pt-4">
          <span className="text-primary"> Raven1</span> <br />
          <span>Christmas Science Fair</span>
        </h1>
        <p className="py-10 sm:py-6 text-base md:text-xl text-base-content md:mr-20">
          We’re celebrating the holidays by bringing{" "}
          <b className="text-primary">science</b> to the forefront of{" "}
          <b className="text-primary">christmas</b>.
          <br />
          <br />
          Experience a unique{" "}
          <b className="text-primary">Christmas Science Fair</b> filled with
          spectacular experiments and engineering. Whether you are building
          robots or rediscovering retro tech, come see the{" "}
          <b className="text-primary">magic behind the science</b>.
        </p>
        <AddToCalendar />
      </HeroText>
    </>
  );
};
