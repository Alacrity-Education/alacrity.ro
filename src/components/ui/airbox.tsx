export default function AirBox() {
  return (
    <div className=" relative h-max bg-base-200 flex flex-col items-center py-20 ">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l dark:from-primary via-base-200 dark:to-primary from-neutral to-neutral opacity-10 md:opacity-20 brightness-150 hidden md:block dark:opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-primary via-base-200 dark:to-primary from-neutral to-neutral opacity-10 md:opacity-20 brightness-150 dark:opacity-10"></div>
      <h2 className="text-2xl sm:text-5xl z-10 font-bold">
        Meet Alacrity/
        <span className="z-10 text-transparent bg-clip-text bg-gradient-to-r from-neutral dark:from-primary to-secondary dark:via-primary via-neutral font-bold py-5">
          Airbox
        </span>
      </h2>
      <p className=" z-10 text-xl sm:text-2xl font-semibold pt-4">
        A better view for education.
      </p>
      <p className=" z-10 text-base-content  md:text-xl max-w-4xl py-10 pt-2 px-4 sm:px-0">
        {/* <span className="text-seconadry ">Alacrity Airbox</span> is our latest
        project. */}
        <br />
        <br />
        An <b className="text-neutral dark:text-primary">educational kit </b>
        that aims to teach high-school students about the{" "}
        <b className="text-secondary">environment</b>,
        <b className="text-secondary"> programming</b> and{" "}
        <b className="text-secondary"> networking</b> and all in one kit that
        provides important CO2, temperature and atmospheric pressure readings.
        The measuring station is built from{" "}
        <b className="text-neutral dark:text-primary">
          highly available materials
        </b>{" "}
        and
        <b className="text-neutral dark:text-primary">
          {" "}
          recycled batteries
        </b>{" "}
        and is 100% autonomous after install and powered by{" "}
        <b className="text-neutral dark:text-primary ">
          high-precision sensors
        </b>
        <br />
        <br /> <b className="text-secondary">Airbox</b> allows high-schoolers to
        gain real-world experience in programming and electronics by allowing
        them to build useful infrastructure together with us, the mentors.
      </p>
      <button className="z-10 text-xs sm:text-base btn btn-primary btn-disabled text-primary text-opacity-70">
        Airbox website is in development.
      </button>
    </div>
  );
}
