import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="relative h-max bg-base-200 flex flex-col items-center py-10 pb-20">
      <div className="text-2xl sm:text-5xl font-semibold py-16 text-center">
        <span className="text-black dark:text-white">Our Impact. </span>
        <span className="text-primary">In Pictures.</span>
        <br />
        <br />
        <div className="text-lg">Some pictures from our projects.</div>
      </div>

      <div className="w-[100vw] mx-auto z-10 relative px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 sm:gap-6 relative z-10">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="aspect-video rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/left1.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/left2.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/left3.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-6">
            <div className="h-[calc(50%-0.75rem)] rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/middle1.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
            <div className="h-[calc(50%-0.75rem)] rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/middle2.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="aspect-video rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/right1.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/right2.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg relative w-full">
              <Image
                alt="bg"
                src="/galerie/right3.jpg"
                height={500}
                width={500}
                className="absolute w-full h-full left-0 top-0 scale-100 mix-blend-overlay dark:mix-blend-normal rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max absolute inset-0 flex justify-center items-center z-1 hidden sm:flex">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1470.6 360C1282.95 360 1282.95 440 1095.3 440C907.65 440 907.65 360 720 360C532.35 360 532.35 440 344.7 440C157.05 440 157.05 360 -30.6 360"
              stroke="#5863ff"
              strokeWidth="80"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-30.6 120C157.05 120 157.05 200 344.7 200C532.35 200 532.35 120 720 120C907.65 120 908.484 200 1096.13 200C1283.78 200 1282.95 120 1470.6 120"
              stroke="#5863ff"
              strokeWidth="80"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1470.6 600C1282.95 600 1282.95 680 1095.3 680C907.65 680 907.65 600 720 600C532.35 600 532.35 680 344.7 680C157.05 680 157.05 600 -30.6 600"
              stroke="#5863ff"
              strokeWidth="80"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
