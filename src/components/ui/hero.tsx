import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero  min-h-screen relative overflow-clip">
      <div className="hero-content w-screen justify-between flex-col lg:flex-row-reverse relative ">
        <div className="w-1/3 relative -z-30 pt-10 sm:pt-0">
          <div className=" relative z-0 shadow-2xl h-1/2 md:h-full overflow-visible hover:-translate-y-1 transition-transform scale-125 w-full bg-white rounded-full mb-10 md:mb-0 flex justify-center items-center aspect-square">
            <Image
              src="/logo.svg"
              alt="hero"
              width={2000}
              height={2000}
              className="h-full w-full relative  "
            />
          </div>
        </div>
        <div className="max-w-md relative z-30 sm:max-w-3xl flex flex-col justify-center sm:block ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-base-content dark:text-white sm:text-start ">
            Improving the education{" "}
            <span className="text-primary">of the future</span>
          </h1>
          <p className="py-10 sm:py-6  md:text-xl text-base-content md:mr-20">
            We’re opening Romania’s first{" "}
            <b className="text-primary">open-source STEAM</b> lab—where{" "}
            <b className="text-primary">education </b>
            meets <b className="text-primary">invention</b>.
            <br />
            From air quality sensors to environmental tech, we help young minds
            shape a <b>sustainable and intelligent future</b>.
          </p>

          <a
            href="https://formular230.ro/alacrity-education"
            className="btn bg-gradient-to-tr from-accent/20 text-white to-primary border-0 btn-lg hover:-translate-y-1 duration-500 transition-transform z-[999] dark:shadow-xl  "
          >
            Redirect 3.5%
          </a>
        </div>
      </div>
      <div className="-z-10 mb-0 pb-1 !border-0   custom-shape-divider-bottom-1737547199">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="h-screen w-screen absolute bg-gradient-to-tl dark:bg-gradient-to-br from-primary to-base-100 mask-circle -rotate-12 -z-20  opacity-60 dark:opacity-40 rounded-full  left-1/2 translte-x-1/3 "></div>
    </div>
  );
}
