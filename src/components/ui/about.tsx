import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  text: string;
  link?: string;
  linkText?: string;
  image?: React.ReactNode;
}

export default function About() {
  return (
    <div className="text-primary-content min-h-screen relative bg-gradient-to-b from-primary to-neutral pb-4 flex flex-colitems-center ">
      <div className=" absolute h-full w-full overflow-clip">
        <Image
          alt="bg"
          height={1000}
          width={1000}
          src="/cyclone.svg"
          className="absolute w-full h-full -left-1/3 top-1/3 scale-[2] mix-blend-overlay dark:mix-blend-normal opacity-70"
        />
      </div>
      <div className="pt-20 flex flex-col w-full items-center gap-10 z-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
          <div className="basis-2/3 flex gap-10 justify-center h-full flex-col">
            <div className="h-80 w-full rounded-lg shadow-xl">
              <Image
                src="/Working.jpeg"
                className="h-full w-full object-cover rounded-lg"
                height={300}
                width={300}
                alt="Prototyping of Alacrity Airbox"
              />
            </div>
            <div className="h-80 w-full rounded-lg shadow-xl">
              <Image
                src="/meet.jpeg"
                className="h-full w-full object-cover rounded-lg"
                height={300}
                width={300}
                alt="The first oficial preparation for Alacrity Airbox"
              />
            </div>
          </div>
          <div className="px-10">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold">
              Wait, who?
            </h2>
            <p className="py-20 pt-10 text-xl max-w-sm sm:max-w-2xl">
              We are Alacrity Education, a youth-founded NGO, created by young
              people for young people, driven by the desire to promote
              high-quality STEAM (Science, Technology, Engineering, Arts and
              Mathematics) education.
            </p>
            <h2 className="text-2xl font-semibold pt-5">
              Not just keyboard warriors
            </h2>
            <p className="py-20 pt-5 text-xl">
              Our goal is to advocate for quality education and promote it in
              the most practical and pragmatic way possible. We don't want to
              remain just an "online publication" or an Instagram account. We
              aim to organize hands-on activities where interested individuals
              can practically develop their skills over longer periods of time.
            </p>
          </div>
        </div>
        <Link href="/about" className="btn btn-xl btn-primary">
          Check out Alacrity's history!
        </Link>
      </div>
      <div className="custom-shape-divider-bottom-1737549060">
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

const background = (
  <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
    <path
      className="stroke-base-300"
      d="m35.9896 7c14.625 0 29.0104 11.5833 29.0104 28.9583 0 16-12.7511 29.0417-29.0104 29.0417-13.8445 0-26.0666-9.3958-26.0666-23.8838 0-10.4059 8.4357-18.8416 18.8416-18.8416 8.3247 0 15.0733 6.7485 15.0733 15.0733 0 6.6598-5.3988 12.0586-12.0586 12.0586-5.3278 0-9.6469-4.3191-9.6469-9.6469 0-4.2623 3.4552-7.7175 7.7175-7.7175 3.4098 0 6.174 2.7642 6.174 6.174 0 2.7278-2.2114 4.9392-4.9392 4.9392-2.1823 0-3.9578-1.7691-3.9514-3.9514.0053-1.8015 1.213-2.8736 2.8239-2.4426.2681.0717.6559.2764.9406.633.3572.4473.4259.9031.4636 1.3122"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
);
