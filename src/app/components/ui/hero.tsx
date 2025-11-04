import Image from "next/image";
import React from "react";

export default function Hero({
  children,
  maskType,
}: {
  children?: React.ReactNode;
  maskType?: string;
}) {
  return (
    <div className="hero z-0 relative bg-base-200 pb-24 sm:pb-0 min-h-screen max-w-screen overflow-x-clip">
      <div className="hero-content w-screen justify-between flex-col lg:flex-row-reverse relative ">
        {children}
      </div>
      <div
        className={
          "h-screen w-screen absolute bg-gradient-to-tl dark:bg-gradient-to-br from-primary to-base-100 -rotate-12 -z-20  opacity-60 dark:opacity-40 rounded-full  left-1/2 translte-x-1/3 " +
          (maskType ? maskType : "mask-circle")
        }
      ></div>
    </div>
  );
}

export const HeroText = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-w-md relative z-30 sm:max-w-2xl flex flex-col justify-center sm:block">
      {children}
    </div>
  );
};

export const HeroImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div className="w-full px-10 sm:w-1/3 relative pt-10 sm:pt-0">
      <div className="relative z-0 md:h-full overflow-visible hover:-translate-y-1 transition-transform scale-125 w-full mb-10 md:mb-0 flex justify-center items-center aspect-square">
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={2000}
          className={
            "w-full relative object-cover object-bottom " +
            (className ? className : "")
          }
        />
      </div>
    </div>
  );
};
