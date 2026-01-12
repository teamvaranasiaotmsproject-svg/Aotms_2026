import { Link } from "react-router-dom";
import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    SiReact,
    SiPython,
    SiAmazonwebservices,
    SiDocker,
    SiKubernetes,
    SiSelenium,
    SiNodedotjs,
    SiJavascript,
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiDjango,
    SiSpringboot,
    SiGithub,
    SiFigma,
    SiAdobephotoshop,
    SiAndroid,
    SiTerraform,
    SiJenkins,
    SiLinux,
    SiOpenai,
    SiGooglecloud,
    SiNextdotjs,
    SiTailwindcss,
    SiSupabase,
    SiVercel
} from "react-icons/si";

import { IconType } from "react-icons";

interface Logo {
    id: string;
    description: string;
    icon?: IconType;
    color?: string;
    image?: string;
    className?: string;
    link?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const defaultLogos: Logo[] = [
    { id: "tech-1", description: "Next.js", icon: SiNextdotjs, color: "#000000", link: "/courses/nextjs" },
    { id: "tech-2", description: "React", icon: SiReact, color: "#61DAFB", link: "/courses/react" },
    { id: "tech-4", description: "Supabase", icon: SiSupabase, color: "#3ECF8E", link: "/courses/supabase" },
    { id: "tech-3", description: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", link: "/courses/tailwind-css" },
    { id: "tech-5", description: "Vercel", icon: SiVercel, color: "#000000", link: "/courses/vercel" },
    { id: "tech-6", description: "Python", icon: SiPython, color: "#3776AB", link: "/courses/python" },
    { id: "tech-7", description: "AWS", icon: SiAmazonwebservices, color: "#FF9900", link: "/courses/aws" },
    { id: "tech-9", description: "Docker", icon: SiDocker, color: "#2496ED", link: "/courses/docker" },
    { id: "tech-10", description: "Kubernetes", icon: SiKubernetes, color: "#326CE5", link: "/courses/kubernetes" },
    { id: "tech-11", description: "GitHub", icon: SiGithub, color: "#181717", link: "/courses/github" },
    { id: "tech-12", description: "Figma", icon: SiFigma, color: "#F24E1E", link: "/courses/figma" },
    { id: "tech-13", description: "OpenAI", icon: SiOpenai, color: "#412991", link: "/courses/openai" },
    { id: "tech-14", description: "MongoDB", icon: SiMongodb, color: "#47A248", link: "/courses/mongodb" },
    { id: "tech-15", description: "Google Cloud", icon: SiGooglecloud, color: "#4285F4", link: "/courses/google-cloud" },
];

const Logos3 = ({
    heading = "",
    logos = defaultLogos,
    className = "",
}: Logos3Props) => {
    if (!logos || logos.length === 0) return null;

    return (
        <section className={`py-4 bg-white ${className}`}>
            {heading && (
                <div className="container flex flex-col items-center text-center mb-10">
                    <h2 className="text-2xl font-bold lg:text-3xl text-slate-900 tracking-tight">
                        {heading}
                    </h2>
                </div>
            )}
            <div className="relative mx-auto flex items-center justify-center">
                <Carousel
                    opts={{ loop: true }}
                    plugins={[AutoScroll({ playOnInit: true, speed: 1.0, stopOnInteraction: false, stopOnMouseEnter: true })]}
                    className="w-full"
                >
                    <CarouselContent className="ml-0">
                        {logos.map((logo) => (
                            <CarouselItem
                                key={logo.id}
                                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                            >
                                {logo.link ? (
                                    <Link to={logo.link} className="flex items-center justify-center gap-2.5 px-4 group select-none">
                                        {logo.icon && (
                                            <logo.icon
                                                className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                                                style={{ color: logo.color }}
                                            />
                                        )}
                                        <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight whitespace-nowrap">
                                            {logo.description}
                                        </span>
                                    </Link>
                                ) : (
                                    <div className="flex items-center justify-center gap-2.5 px-4 group select-none">
                                        {logo.icon && (
                                            <logo.icon
                                                className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                                                style={{ color: logo.color }}
                                            />
                                        )}
                                        <span className="text-base sm:text-lg font-bold text-slate-800 tracking-tight whitespace-nowrap">
                                            {logo.description}
                                        </span>
                                    </div>
                                )}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export { Logos3 };
