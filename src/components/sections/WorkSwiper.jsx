import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097";

export default function WorkSlider() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/works?populate=*", { headers: { Authorization: `Bearer ${TOKEN}` } });
                const data = res.data.data || [];
                const formattedData = data.map((item) => ({
                    id: item.id,
                    WorkName: item.WorkName,
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
                        console.log("Project:", project),
                        <SwiperSlide key={index} className="w-full rounded-xl">
                            <div className="w-full bg-black border border-[#1f1f1f] rounded-xl p-6 flex flex-col gap-5 cursor-pointer" onClick={() => handleCardClick(project)}>
                                {/* Image */}
                                {project.workImg ? (
                                    <img src={`http://localhost:1337${project.workImg.url}`} alt={project.WorkName} className="w-full h-[260px] rounded-xl border border-[#2a2a2a] object-cover" />
                                ) : (
                                    <div className="w-full h-[260px] rounded-xl border border-[#2a2a2a]" />
                                )}

                                {/* Title */}
                                <h3 className="text-white text-2xl font-semibold">{project.WorkName}</h3>

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
