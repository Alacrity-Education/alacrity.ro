import Image from "next/image";
import { Card, CardBody, CardCTA, CardImage } from "@/app/components/ui/primitives/card";

interface CardProps {
  title: string;
  text: string;
  link?: string;
  linkText?: string;
  image?: React.ReactNode;
}
const Showcase = () => {
  const cards: CardProps[] = [
    {
      title: "Team and Community",
      text: `We are a team of 10 professionals
with modern visions, motivated to
provide fair access to quality
education.`,
      image: <TeamAndCommunity />,
    },
    {
      title: "Data Based",
      text: `Our team works a lot based on
data collected from the
communities we work with.`,
      link: "https://forms.gle/6B3ubvXitj5ZRgxX6",
      linkText: "Complete our survey",
      image: <DataBased />,
    },
    {
      title: "Non Profit",
      text: `Access to quality education,
no matter your income, should be
a human right. We are striving to
achieve that in our NGO.`,
      image: <NonProfit />,
    },
  ];
  return (
    <div className="h-max bg-base-100 z-20 flex flex-col items-center py-10 pb-20">
      <h2 className="text-2xl sm:text-5xl font-semibold py-16">
        Perks. Only some of them.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {cards.map((card, index) => (
          <ShowcaseCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const ShowcaseCard = ({ title, text, link, linkText, image }: CardProps) => {
  return (
    <Card>
      <CardImage className="bg-primary">
        <div className="invert h-full w-full"> {image}</div>
      </CardImage>
      <CardBody className="h-full w-full">
        <div className="relative w-full h-full flex flex-col">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-base text-base-content pt-2 leading-snug">{text}</p>
          <div className="flex-1"></div>
          {link && <CardCTA href={link}>{linkText}</CardCTA>}
        </div>
      </CardBody>
    </Card>
  );
};

const TeamAndCommunity = () => {
  return (
    <Image
      src="/raven.svg"
      height={500}
      width={500}
      className="h-full w-full object-contain "
      alt="raven"
    />
  );
};

const DataBased = () => (
  <svg
    className="h-full w-full invert"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    fill="white"
  >
    <path d="M12 2C7.58 2 4 4.24 4 7v10c0 2.76 3.58 5 8 5s8-2.24 8-5V7c0-2.76-3.58-5-8-5zm0 2c3.86 0 7 1.57 7 3s-3.14 3-7 3-7-1.57-7-3 3.14-3 7-3zm0 14c-3.86 0-7-1.57-7-3V9.91c1.76 1.16 4.42 1.84 7 1.84s5.24-.68 7-1.84V15c0 1.43-3.14 3-7 3z" />
  </svg>
);

const NonProfit = () => (
  <Image
    alt="NGO"
    src="cyclone.svg"
    height={200}
    width={200}
    className="h-full w-full object-cover"
  />
);

export default Showcase;
