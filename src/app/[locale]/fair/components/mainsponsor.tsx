import Carousel, {
  CarouselCard,
} from "@/app/components/ui/primitives/carousel";
const items = [
  {
    src: "/sciencefair/partners/start_ong.png",
    href: "https://startong.ro/",
    alt: "Start.ng Logo",
      className: " bg-gradient-to-bl from-primary to-secondary via-primary"
  },
  {
    src: "/sciencefair/partners/kaufland.png",
    href: "https://despre.kaufland.ro/",
    alt: "Laufland Logo",
      className: " bg-gradient-to-bl from-primary to-secondary via-primary"
  },
    {
        src: "/sciencefair/partners/act_for_tomorrow.png",
        href: "https://despre.kaufland.ro/",
        alt: "Laufland Logo",

        className: " bg-gradient-to-bl from-white to-primary via-white"
    }
];

const FAIR_COLOR_1 = "#b67183";
const FAIR_COLOR_2 = "#8a82ae";

export default function MainSponsor() {
  return (
    <Carousel title={"Main Sponsors"} items={items}>
      {items.map((item, index) => (
        <CarouselCard
          key={item.alt + index}
          {...item}
        />
      ))}
    </Carousel>
  );
}
