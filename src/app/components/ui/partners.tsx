import Carousel, { CarouselCard } from "./primitives/carousel";

const partners = [
  {
    href: "https://www.instagram.com/robobadgers/",
    src: "/partners/robo_badgers.png",
    alt: "RoboBadgers robotics team",
  },
  {
    href: "https://magurelesciencepark.ro/",
    src: "/partners/msp.png",
    alt: "Magurele Science Park",
  },
  {
    href: "https://fils.upb.ro/ro/home/",
    src: "/partners/fils.jpg",
    alt: "Faculty of Engineering in Foreign Languages",
  },
  {
    href: "https://www.innovailia.com",
    src: "/partners/innovalia.png",
    alt: "Innovalia",
  },
];

export default function Partners() {
  return (
    <Carousel title="Partners" items={partners}>
      {partners.map((item, index) => (
        <CarouselCard
          key={item + item.alt + index}
          href={item.href}
          alt={item.alt}
          src={item.src}
        />
      ))}
    </Carousel>
  );
}
