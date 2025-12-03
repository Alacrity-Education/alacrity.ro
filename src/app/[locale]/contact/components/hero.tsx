import Hero, { HeroImage, HeroText } from "@/app/components/ui/primitives/hero";
import Link from "next/link";

export default function ContactHero() {
  return (
    <Hero maskType="mask-hexagon">
      <ContactHeroContent />
    </Hero>
  );
}

const ContactHeroContent = () => {
  return (
    <>
      <HeroImage
        src="/ContactUs.jpeg" 
        alt="Contact Alacrity Team"
        className="rounded-lg shadow-2xl md:scale-125 mt-10 sm:mt-0"
      />

      <HeroText>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-center sm:text-start text-base-content">
          Let's <span className="text-primary">get in touch</span>
        </h1>
        
        <p className="py-8 text-lg md:text-xl text-base-content/80 md:mr-10 text-center sm:text-start">
          Whether you have a question about our <b className="text-secondary">projects</b>, want to become a partner, or simply want to say hello...
          <br className="hidden md:block" />
          <br className="hidden md:block" />
          We are here to listen. Fill out the form below or reach out to us on social media.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">

            <Link href="#contact-form" className="btn btn-primary btn-lg shadow-lg">
                Send us a message
            </Link>
        </div>
      </HeroText>
    </>
  );
};