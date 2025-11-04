import Hero, { HeroImage, HeroText } from "@/app/components/ui/hero";
import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "./Timeline";
export default function AboutHero() {
  return (
    <Hero maskType="mask-diamond">
      <HeroContent />
    </Hero>
  );
}

const HeroContent = () => {
  return (
    <>
      <HeroImage src="/about/team.jpg" alt="Alacrity Education Team" />
      <BackToHome />
      <HeroText>
        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl pt-10 font-bold dark:text-white">
          Hi, we're <b className="text-primary">Alacrity</b>
        </h1>
        <p className="text-lg sm:text-4xl pt-10 font-bold">
          Advancing education has always been our mission.
        </p>
        <p className="sm:text-lg pt-4">
          Our history is rooted in{" "}
          <span className="font-semibold text-primary">STEAM</span>, Science,
          Technology, Engineering, Arts, and Mathematics. But more than that, we
          are a team of passionate educators, innovators, and learners committed
          to shaping a better future.
        </p>
        <h2 className="text-lg mt-2">
          Explore our journey of impact since{" "}
          <b className="text-primary font-semibold">2024</b>.
        </h2>
      </HeroText>
      {/* <DownBtn /> */}
    </>
  );
};
function BackToHome() {
  return (
    <Link
      href="/"
      className="fixed top-20 right-5 sm:top-25 sm:left-5 backgrop-blur-xl h-10 w-10 z-10 border-2 rounded-sm bg-base-100 shadow-lg hover:bg-primary/20 active:bg-black"
    >
      <Image
        height={100}
        width={100}
        alt="back btn"
        src="/back.svg"
        className="object-contain h-full w-full dark:invert "
      />
    </Link>
  );
}

const DownBtn = () => {
  return (
    <a
      href="#timeline"
      className="h-16 w-16 hidden sm:block absolute bottom-0 hover:animate-bounce"
    >
      <DownArrow className="h-full w-full dark:invert" />
    </a>
  );
};
