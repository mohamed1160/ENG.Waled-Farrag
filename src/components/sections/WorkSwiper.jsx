import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TOKEN =
    "8af8ebf69a94129848d0dddcf013defc01429c620b13e99de4b5ee02ac73c93e14c153486d811f90b47df8d3ca3a7a49d78635f5dc2fbb021d0a13b4b3b95e633f85c793f052c493d38a72f991794b351fe0ae4d92936ea747bff09e08dc992a3175f57d246c7c31143ca727297ba7b54139b7bc5352e0029e2c30948d9b4cb5";

export default function WorkSlider() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/works?populate=*");
                const data = res.data.data || [];
                const formattedData = data.map((item) => ({
                    id: item.id,
                    workName: item.workName,
                    workDescription: item.workDescription,
                    workTags: item.workTags ? item.workTags.split(",").map((tag) => tag.trim()) : [],
                    workImg: item.workImg,
                }));
                setProjects(formattedData);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleCardClick = (project) => {
        navigate("/work", { state: { filter: project.WorkName } });
    };

    return (
        <section id="work" className="w-full bg-black">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <Swiper modules={[Autoplay]} slidesPerView={1} spaceBetween={0} autoplay={{ delay: 3500, disableOnInteraction: false }} className="w-full min-h-[520px]">
                    {projects.map((project, index) => (
                        // console.log("Project:", project),
                        <SwiperSlide key={index} className="w-full rounded-xl">
                            <div className="w-full bg-black border border-[#1f1f1f] rounded-xl p-6 flex flex-col gap-5 cursor-pointer" onClick={() => handleCardClick(project)}>
                                {/* Image */}
                                {project.workImg ? (
                                    <img src={`https://passionate-bee-93c3fc2f7c.strapiapp.com${project.workImg.url}`} alt={project.WorkName} className="w-full h-[260px] rounded-xl border border-[#2a2a2a] object-cover" />
                                ) : (
                                    <div className="w-full h-[260px] rounded-xl border border-[#2a2a2a]" />
                                )}

                                {/* Title */}
                                <h3 className="text-white text-2xl font-semibold">{project.workName}</h3>

                                {/* Description */}
                                <p className="text-[#707070] text-base leading-relaxed">{project.workDescription}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.workTags.map((tag, i) => (
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
