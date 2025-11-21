import Carousel, {
  CarouselCard,
} from "@/app/components/ui/primitives/carousel";
const items = [
  {
    src: "/sciencefair/partners/start_ong.png",
    href: "https://startong.ro/",
    alt: "Start.ng Logo",
  },
  {
    src: "/sciencefair/partners/kaufland.png",
    href: "https://despre.kaufland.ro/",
    alt: "Laufland Logo",
  },
];

const FAIR_COLOR_1 = "#b67183";
const FAIR_COLOR_2 = "#8a82ae";

export default function MainSponsor() {
  return (
    <Carousel title={"Main Sponsors"} items={items}>
      {items.map((item, index) => (
        <CarouselCard
          className="bg-gradient-to-l from-[#b67183] to-[#8a82ae]"
          key={item.alt + index}
          {...item}
        />
      ))}
    </Carousel>
  );
}
