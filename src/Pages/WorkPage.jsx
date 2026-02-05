import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import CraftWithMeSection from "../components/sections/CraftWithMeSection";
import Swiper from "../components/UI/Swiper";
import StoriesSection from "../components/sections/StoriesSection";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097"; // استخدم الـ TOKEN المُحدد مباشرة

export default function WorkPage() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/all-projects?populate=*", {
                    headers: { Authorization: `Bearer ${TOKEN}` },
                });
                const data = res.data.data || [];
                const formattedData = data.map((item) => ({
                    id: item.id,
                    title: item.title,
                    slug: item.title.replace(/\s+/g, "-").toLowerCase(),
                    description: item.description,
                    tags: item.tags ? [item.type, ...item.tags.split(",").map((tag) => tag.trim())] : [item.type], 
                    type: item.type,
                    thumbnail: item.thumbnail ? item.thumbnail.url : null,
                    link: item.link || null,
                    date: item.date || null,
                    country: item.country || null,
                    sector: item.sector || null,
                }));
                setProjects(formattedData);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setError("Failed to load projects. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        if (location.state && location.state.filter) {
            setFilter(location.state.filter);
        }
    }, [location.state]);

    const filterTypes = ["All", "Branding", "Layout Design", "Packaging Design", "Wayfinding System"];
    const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.type === filter);

    const handleProjectClick = (project) => {
        if (project.link) {
            window.open(project.link, "_blank");
        } else {
            window.open(`${window.location.origin}/work/project/${project.slug}`, "_blank");
        }
    };

    if (loading) return <div className="flex justify-center items-center h-screen">Loading projects...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <main>
            <section className="w-full mb-8 md:mb-16 mt-20 md:mt-30 px-4 md:px-16">
                <div className="title flex flex-col gap-4 md:gap-8 w-full">
                    <h2 className="text-[18px] md:text-[24px] font-light pt-4 pb-4 px-6 border w-fit border-[#F2F2F23F] rounded-sm">Work</h2>
                    <p className="text-[28px] md:text-[42px] font-light w-full md:w-[70%]">Purpose-driven design that builds identity, structure, experience, and clarity.</p>
                </div>

                <div className="mt-8 md:mt-14">
                    <ul className="flex flex-wrap items-center gap-2 md:gap-4 border-b border-[#F2F2F23F]">
                        {filterTypes.map((type) => (
                            <li key={type}>
                                <button
                                    onClick={() => setFilter(type)}
                                    className={`hover-underline text-[16px] md:text-[18px] p-2 transition-all duration-600 ${filter === type ? "font-semibold text-[#A1A1A1]" : ""}`}>
                                    {type}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                            {filteredProjects.map((project, index) => (
                                <div key={project.id} className={`w-full text-white cursor-pointer ${index % 2 !== 0 ? "mt-0 md:mt-32" : ""}`} onClick={() => handleProjectClick(project)}>
                                    {project.thumbnail ? (
                                        <img
                                            src={`http://localhost:1337${project.thumbnail}`}
                                            alt={project.title}
                                            className="bg-[var(--secondary-2)] rounded-[8px] w-full h-[60vh] md:h-[80vh] object-cover"
                                        />
                                    ) : (
                                        <div className="bg-[var(--secondary-2)] rounded-[8px] w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
                                            <span className="text-gray-400">No Image Available</span>
                                        </div>
                                    )}
                                    <div className="w-full flex flex-col gap-2 mt-4">
                                        <h3 className="font-semibold text-[18px] md:text-[20px]">{project.title}</h3>
                                        <p className="text-[14px] md:text-[16px] text-[var(--secondary-2)]">{project.description}</p>
                                        <div className="mt-4">
                                            <ul className="flex gap-2 md:gap-4 flex-wrap">
                                                {project.tags.map((tag, i) => (
                                                    <li
                                                        key={i}
                                                        className={`text-[12px] md:text-[16px] rounded-full font-light pt-2 pb-2 px-2 md:px-3 ${i === 0 ? "font-medium bg-[var(--secondary-2)]" : "text-[var(--secondary-2)] border border-[var(--secondary-2)]"}`}>
                                                        {tag}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="hidden md:block">
                <StoriesSection />
            </div>

            <div className="hidden md:block">
                <CraftWithMeSection />
            </div>
        </main>
    );
}
