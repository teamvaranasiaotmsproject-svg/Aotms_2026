import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  { id: 1, title: "Hackathon 2024", description: "Join the biggest tech event of the year.", image: "/Banner.jpg" },
  { id: 2, title: "Innovation Challenge", description: "Showcase your skills and win prizes.", image: "/Banner.jpg" },
  { id: 3, title: "Tech Summit", description: "Learn from industry leaders.", image: "/Banner.jpg" },
  { id: 4, title: "Web Development Workshop", description: "Master modern web technologies.", image: "/Banner.jpg" },
  { id: 5, title: "AI & ML Workshop", description: "Explore the future of intelligence.", image: "/Banner.jpg" },
];

export function MainCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="w-full pt-[114px] md:pt-[106px] pb-0">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative h-[50px] md:h-[100px] w-full overflow-hidden flex flex-col items-center justify-center text-white p-2 text-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10">
                  <h2 className="text-sm md:text-xl font-bold drop-shadow-sm">{slide.title}</h2>
                  <p className="text-[10px] md:text-sm opacity-90 hidden sm:block">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-none text-white h-6 w-6" />
        <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-none text-white h-6 w-6" />
      </Carousel>
    </div>
  );
}
