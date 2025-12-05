import FairHero from "./components/hero";
import FairLocation from "./components/location";
import MainSponsor from "./components/mainsponsor";
import Partners from "./components/partners";
import StandsGrid from "./components/standsGrid";

export default function Page() {
  return (
    <div className="min-h-screen h-max w-full relative z-0">
      <FairHero />
      <StandsGrid />
      <FairLocation />
      <MainSponsor />
      <Partners />
    </div>
  );
}
