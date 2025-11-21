import Carousel, {
  CarouselCard,
} from "@/app/components/ui/primitives/carousel";

const partners = [
  {
    href: "http://www.rotineret.ro/",
    alt: "Fundatia Nationala Pentru Tineret",
    src: "/sponsors/fnt.png",
  },
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
];

export default function Partners() {
  return (
    <Carousel title="Partners" items={partners}>
      {partners.map((item, index) => (
        <CarouselCard key={item.alt + index} {...item} />
      ))}
    </Carousel>
  );
}
