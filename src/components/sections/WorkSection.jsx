import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../ProjectCard";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097";

export default function WorkSection() {
    const [projects, setProjects] = useState([]);
    

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/selected-works?populate=*", { headers: { Authorization: `Bearer ${TOKEN}` } });
                const data = res.data.data || [];
                const sortedData = data.sort((a, b) => (a.idNumber || 0) - (b.idNumber || 0));
                setProjects(sortedData);
                
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);
    

    return (
        <section className="w-full px-16">
            {/* Title */}
            <div className="flex flex-col gap-8">
                <h2 className="text-[24px] font-light px-6 py-4 border border-[#F2F2F23F] w-fit">Selected Work</h2>
                <p className="text-[42px] font-light">
                    Crafting Meaningful Brands <span className="font-bold">with Strategic Vision</span>
                </p>
            </div>

            {/* Top Grid */}
            <div className="grid mt-8 mb-[36px] grid-cols-4 gap-6">
                {projects[0] && (
                    <div className="col-start-1 col-end-2">
                        <ProjectCard project={projects[0]} minHeight="360px" tagsCols={3} />
                    </div>
                )}

                {projects[1] && (
                    <div className="col-start-2 col-end-4">
                        <ProjectCard project={projects[1]} minHeight="632px" tagsCols={7} />
                    </div>
                )}

                {projects[2] && (
                    <div className="col-start-4 col-end-5">
                        <ProjectCard project={projects[2]} minHeight="360px" tagsCols={3} />
                    </div>
                )}
            </div>

            {/* Full Width */}
            {projects[3] && <ProjectCard project={projects[3]} minHeight="100vh" tagsCols={7} />}

            {/* Bottom Grid */}
            <div className="mt-[36px] grid grid-cols-2 gap-6">
                {projects[4] && <ProjectCard project={projects[4]} minHeight="75vh" tagsCols={7} />}

                {projects[5] && <ProjectCard project={projects[5]} minHeight="75vh" tagsCols={7} />}
            </div>
        </section>
    );
}