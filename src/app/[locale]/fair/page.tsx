import FairHero from "./components/hero";
import FairLocation from "./components/location";
import MainSponsor from "./components/mainsponsor";
import Partners from "./components/partners";

export default function Page() {
  return (
    <div className="min-h-screen h-max w-full relative z-0">
      <FairHero />
      <FairLocation />
      <MainSponsor />
      <Partners />
    </div>
  );
}
