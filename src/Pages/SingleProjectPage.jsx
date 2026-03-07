import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules"; 

const TOKEN =
    "0d88badca1be6a12060996f9d5dc8ebcc447bfc8994ac5fd94eecb01e84944ae162313abee88f5d3f5837835d910a43043a5a13bde8012a6569daa340bcbcd287fe1afd59809ad4111db360778e3f5551526ca7aef5ed4f03455cfa64c1f867c88487e18ddb713b296a1d1a502c1986b300c12d5f5d47cc6fde526d089af86e1";
export default function SingleProjectPage() {
    const { slug } = useParams(); 
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/projects?populate=*", {
                    headers: { Authorization: `Bearer ${TOKEN}` },
                });
                const data = res.data.data || [];
                const foundProject = data.find((item) => item.title.replace(/\s+/g, "-").toLowerCase() === slug);
                if (foundProject) {
                    setProject({
                        id: foundProject.id,
                        title: foundProject.title,
                        description: foundProject.description,
                        tags: foundProject.tags ? foundProject.tags.split(",").map((tag) => tag.trim()) : [],
                        type: foundProject.type,
                        thumbnail: foundProject.thumbnail ? foundProject.thumbnail.url : null,
                        images: foundProject.images ? foundProject.images.map((img) => img.url) : [], 
                        link: foundProject.link || null,
                        date: foundProject.date || null,
                        country: foundProject.country || null,
                        sector: foundProject.sector || null,
                    });
                } else {
                    setError("Project not found.");
                }
            } catch (err) {
                console.error("Error fetching project:", err);
                setError("Failed to load project. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchProject();
    }, [slug]);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading project...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;
    if (!project) return <div className="text-center">Project not found.</div>;

    return (
        <main className="">
            {/* <Link to="/work" className="text-[14px] sm:text-[16px] md:text-[18px] text-[var(--secondary-2)] hover:underline mb-8 inline-block px-4 sm:px-8 md:px-16">
                ← Back to Work
            </Link> */}

            <div className="flex flex-col gap-6 sm:gap-8">
                {project.thumbnail && (
                    <div className="w-full h-[50vh] md:h-screen">
                        <img src={`https://passionate-bee-93c3fc2f7c.strapiapp.com${project.thumbnail}`} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-8">
                    <div className="flex-1 flex flex-col">
                        <h1 className="text-[20px] sm:text-[28px] md:text-[36px] font-medium">{project.title}</h1>
                        <p className="text-[16px] sm:text-[18px] md:text-[24px] text-[var(--secondary-2)]">{project.description}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-left text-[14px] sm:text-[16px] text-[#707070] md:text-right">
                        {project.country && (
                            <div>
                                <span>Country:</span> {project.country}
                            </div>
                        )}
                        {project.date && (
                            <div>
                                <span>Date:</span> {project.date}
                            </div>
                        )}
                        {project.sector && (
                            <div>
                                <span>Sector:</span> {project.sector}
                            </div>
                        )}
                    </div>
                </div>

                <div className="px-4 sm:px-8 md:px-16">
                    <ul className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
                        {project.tags.map((tag, i) => (
                            <li
                                key={i}
                                className="text-[12px] sm:text-[14px] md:text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-full font-light pt-1.5 pb-1.5 sm:pt-2 sm:pb-2 px-2 sm:px-3">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                {project.images && project.images.length > 0 && (
                    <div className="px-4 sm:px-8 md:px-16">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            sm:spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh]">
                            {project.images.map((imageUrl, index) => (
                                <SwiperSlide key={index}>
                                    <img src={`https://passionate-bee-93c3fc2f7c.strapiapp.com${imageUrl}`} alt={`${project.title} - Image ${index + 1}`} className="w-full h-full object-cover" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                <div className="px-4 sm:px-8 md:px-16 text-center">
                    <p className="text-[16px] sm:text-[18px] md:text-[24px] text-[var(--secondary-2)] max-w-2xl mx-auto">{project.description}</p>
                </div>

                {project.link && (
                    <div className="px-4 sm:px-8 md:px-16">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View External Link
                        </a>
                    </div>
                )}
            </div>
        </main>
    );
}
