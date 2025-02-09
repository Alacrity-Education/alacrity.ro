import Image from "next/image";

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
provide fair access to qualitative
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
      text: `Access to qualitative education,
no matter your income, should be
a human right. We are striving to
achieve that in our NGO.`,
      image: <NonProfit />,
    },
  ];
  return (
    <div className="h-max bg-base-200 flex flex-col items-center py-10 pb-20">
      <div className="text-2xl sm:text-5xl font-semibold py-16">
        Perks. Only some of them.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, text, link, linkText, image }: CardProps) => {
  return (
    <div className="card bg-base-100 md:w-80 lg:w-96 shadow-xl">
      <figure className="h-40  bg-primary">
        <div className="invert h-full w-full"> {image}</div>
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-lg">{text}</p>
        {link && (
          <div className="card-actions justify-end pt-10 ">
            <a href={link} className="btn btn-primary">
              {linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const TeamAndCommunity = () => {
  return (
    <svg
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="48"
      height="48"
      fill="currentColor"
    >
      <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zM6.5 8c0-.83.67-1.5 1.5-1.5S9.5 7.17 9.5 8 8.83 9.5 8 9.5 6.5 8.83 6.5 8zM15 9.5c-.83 0-1.5-.67-1.5-1.5S14.17 6.5 15 6.5 16.5 7.17 16.5 8 15.83 9.5 15 9.5z" />
    </svg>
  );
};

const DataBased = () => (
  <svg
    className="h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    fill="currentColor"
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
