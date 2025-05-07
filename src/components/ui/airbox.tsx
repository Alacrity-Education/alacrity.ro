export default function AirBox() {
  return (
    <div className=" relative h-max bg-base-200 flex flex-col items-center py-20 ">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l dark:from-primary via-base-200 dark:to-primary from-neutral to-neutral opacity-10 md:opacity-20 brightness-150 hidden md:block dark:opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-primary via-base-200 dark:to-primary from-neutral to-neutral opacity-10 md:opacity-20 brightness-150 dark:opacity-10"></div>
      <div className="text-2xl sm:text-5xl z-10 font-bold">
        Meet Alacrity/
        <span className="z-10 text-transparent bg-clip-text bg-gradient-to-r from-neutral dark:from-primary to-secondary dark:via-primary via-neutral font-bold py-5">
          Airbox
        </span>
      </div>
      <p className=" z-10 text-xl sm:text-2xl font-semibold pt-4">
        A better view for education.
      </p>
      <p className=" z-10  md:text-xl max-w-4xl py-10 pt-2 px-4 sm:px-0">
        {/* <span className="text-seconadry ">Alacrity Airbox</span> is our latest
        project. */}
        <br />
        <br />
        An{" "}
        <span className="text-neutral dark:text-primary">educational kit </span>
        that aims to teach high-school students about the{" "}
        <span className="text-secondary">environment</span>,
        <span className="text-secondary"> programming</span> and{" "}
        <span className="text-secondary"> networking</span> and all in one kit
        that provides important CO2, temperature and atmospheric pressure
        readings. The measuring station is built from{" "}
        <span className="text-neutral dark:text-primary">
          highly available materials
        </span>{" "}
        and
        <span className="text-neutral dark:text-primary">
          {" "}
          recycled batteries
        </span>{" "}
        and is 100% autonomous after install and powered by{" "}
        <span className="text-neutral dark:text-primary ">
          high-precision sensors
        </span>
        <br />
        <br /> <span className="text-secondary">Airbox</span> allows
        high-schoolers to gain real-world experience in programming and
        electronics by allowing them to build useful infrastructure together
        with us, the mentors.
      </p>
      <button className="z-10 text-xs sm:text-base btn btn-primary btn-disabled text-primary text-opacity-70">
        Airbox website is in development.
      </button>
    </div>
  );
}
