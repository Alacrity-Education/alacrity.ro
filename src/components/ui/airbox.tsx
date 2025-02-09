export default function AirBox() {
  return (
    <div className=" relative h-max bg-base-200 flex flex-col items-center py-20 ">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-primary via-base-200 to-primary opacity-10 md:opacity-40 brightness-150 hidden md:block"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary via-base-200 to-primary opacity-10 md:opacity-40 brightness-150 "></div>

      <div className="z-10 text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary via-primary font-bold py-5">
        Airbox
      </div>
      <p className=" z-10 text-2xl font-semibold">
        A better view for education.
      </p>
      <p className=" z-10  md:text-xl max-w-4xl py-10 px-4 sm:px-0">
        <span className="text-seconadry ">Alacrity Airbox</span> is our latest
        project.
        <br />
        <br />
        It is an <span className="text-primary">educational kit </span>
        that aims to teach high-school students about the{" "}
        <span className="text-secondary">environment</span>,
        <span className="text-secondary"> programming</span> and{" "}
        <span className="text-secondary"> networking</span>, all in one kit that
        provides important CO2, temperature and atmospheric pressure readings.
        The measuring station is built from{" "}
        <span className="text-primary">highly available materials</span> and
        <span className="text-primary"> recycled batteries</span> and is 100%
        autonomous after install.
        <br />
        <br /> <span className="text-secondary">Airbox</span> allows
        high-schoolers to gain real-world experience in programming and
        electronics by allowing them to build useful infrastructure together
        with us, the mentors.
      </p>
      <button className="z-10 btn btn-primary btn-disabled text-primary text-opacity-70">
        Airbox is ongoing
      </button>
    </div>
  );
}
