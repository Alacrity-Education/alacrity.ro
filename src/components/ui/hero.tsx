import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen relative">
      <div className="hero-content w-screen justify-between flex-col lg:flex-row-reverse">
        <div className="w-1/3">
          <Image
            src="/logo.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="h-1/2 w-1/2 md:h-full md:w-full dark:invert dark:saturate-0 dark:mix-blend-screen"
            layout="responsive"
          />
        </div>
        <div className="max-w-md sm:max-w-3xl flex flex-col justify-center sm:block">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center sm:text-start ">
            Improving the education{" "}
            <span className="text-primary">of the future</span>
          </h1>
          <p className="py-10 sm:py-6">
            90% of romanians don’t know the metrics for measuring air quality
            <br />
            60% of students don’t think their teachers are prepared to teach
            about environmental problems
          </p>
          <Link
            href="/about"
            className="btn btn-primary btn-xl z-10 dark:shadow-xl"
          >
            About us
          </Link>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1737547199">
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
    </div>
  );
}
