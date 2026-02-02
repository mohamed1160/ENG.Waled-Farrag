import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WorkSlider() {
    const projects = [
        {
            title: "Brand Identity Project",
            description: "A strategic branding project focused on creating a strong and consistent visual identity.",
            tags: ["Branding", "Strategy"],
        },
        {
            title: "UI / UX Case Study",
            description: "Designing intuitive user interfaces with a focus on usability and clean interactions.",
            tags: ["UI Design", "UX"],
        },
        {
            title: "Web Design Concept",
            description: "A modern website concept designed to deliver clarity, structure, and visual impact.",
            tags: ["Web Design", "Frontend"],
        },
        {
            title: "Mobile App Experience",
            description: "Crafting a seamless mobile app experience that prioritizes user flow and accessibility.",
            tags: ["Mobile", "App Design"],
        },
    ];

    return (
        <section id="work" className="w-full bg-black">
            
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1} 
                    spaceBetween={0}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    className="w-full min-h-[520px]">
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="w-full rounded-xl">
                            <div className="w-full bg-black border border-[#1f1f1f] rounded-xl p-6 flex flex-col gap-5">
                                {/* Image */}
                                <div className="w-full h-[260px] rounded-xl border border-[#2a2a2a]" />

                                {/* Title */}
                                <h3 className="text-white text-2xl font-semibold">{project.title}</h3>

                                {/* Description */}
                                <p className="text-[#707070] text-base leading-relaxed">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 border border-white text-white rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
