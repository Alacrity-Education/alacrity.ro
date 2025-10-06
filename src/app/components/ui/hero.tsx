import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero sticky top-0 z-0 pb-24 sm:pb-0 min-h-screen overflow-clip">
      <div className="hero-content w-screen justify-between flex-col lg:flex-row-reverse relative ">
        <div className="w-1/3 relative -z-30 pt-10 sm:pt-0">
          <div className=" relative z-0 shadow-2xl h-1/2 md:h-full overflow-visible hover:-translate-y-1 transition-transform scale-125 w-full bg-white rounded-full mb-10 md:mb-0 flex justify-center items-center aspect-square">
            <Image
              src="/logo.svg"
              alt="Alacrity Education Logo"
              width={2000}
              height={2000}
              className="h-full w-full relative  "
            />
          </div>
        </div>
        <div className="max-w-md relative z-30 sm:max-w-3xl flex flex-col justify-center sm:block ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-base-content dark:text-white sm:text-start ">
            Improving the education <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              of the future
            </span>
          </h1>
          <p className="py-10 sm:py-6  md:text-xl text-base-content md:mr-20">
            We’re opening Romania’s first{" "}
            <b className="text-primary">open-source STEAM</b> lab, where{" "}
            <b className="text-primary">education </b>
            meets <b className="text-primary">invention</b>.
            <br />
            From air quality sensors to environmental tech, we help young minds
            shape a{" "}
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              sustainable and intelligent future
            </b>
            .
          </p>

          <a
            href="https://buymeacoffee.com/alacrity_education?ref=alacrity.education"
            className="btn bg-gradient-to-tr from-accent text-white to-primary border-0 btn-lg hover:-translate-y-1 duration-500 transition-transform z-50 dark:shadow-xl  "
          >
            Donate for our lab!
          </a>
        </div>
      </div>

      <div className="h-screen w-screen absolute bg-gradient-to-tl dark:bg-gradient-to-br from-primary to-base-100 mask-circle -rotate-12 -z-20  opacity-60 dark:opacity-40 rounded-full  left-1/2 translte-x-1/3 "></div>
    </div>
  );
}
