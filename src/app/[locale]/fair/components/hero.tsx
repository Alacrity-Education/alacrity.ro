import Hero, { HeroImage, HeroText } from "@/app/components/ui/hero";
import Image from "next/image";

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
        className="bg-gradient-to-r from-[#b67183] to-[#8a82ae] rounded-full shadow-2xl scale-75 md:scale-100"
      />

      <HeroText>
        <h1 className="text-3xl md:text-3xl lg:text-5xl tracking-wide font-bold text-center text-base-content/95 sm:text-base-content/90  sm:text-start sm:pt-4">
          <span className="text-primary"> Raven1</span> <br />
          Science Fair
        </h1>
        <p className="py-10 sm:py-6 text-base md:text-xl text-base-content md:mr-20">
          We’re opening Romania’s first{" "}
          <b className="text-primary">open-source STEAM</b> lab, where{" "}
          <b className="text-primary">education </b>
          meets <b className="text-primary">invention</b>.
          <br />
          <br />
          From air quality sensors to environmental tech, we help young minds
          shape a{" "}
          <b className="text-primary">sustainable and intelligent future</b>.
        </p>

        <a
          href="https://buymeacoffee.com/alacrity_education?ref=alacrity.education"
          className="btn btn-primary border-0 btn-lg hover:-translate-y-1 duration-500 transition-transform z-50 shadow-xl hover:shadow-2xl "
        >
          Donate for our lab!
        </a>
      </HeroText>
    </>
  );
};
