import Image from "next/image";
import Hero, { HeroImage, HeroText } from "./primitives/hero";

export default function HomeHero() {
  return (
    <Hero>
      <HeroContent />
    </Hero>
  );
}

const HeroContent = () => {
  return (
    <>
      <HeroImage
        src="/logo.svg"
        alt="Alacrity Education Logo"
        className="bg-white rounded-full shadow-2xl scale-75 md:scale-100"
      />

      <HeroText>
        <h1 className="text-3xl md:text-3xl lg:text-5xl tracking-wide font-bold text-center text-base-content/95 sm:text-base-content/90  sm:text-start sm:pt-4">
          Improving the education <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/95 to-secondary/95 sm:from-primary/90 sm:to-secondary/90">
            of the future
          </span>
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
