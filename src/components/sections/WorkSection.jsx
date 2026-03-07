import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../ProjectCard";

const TOKEN =
    "6e6038e3b4b75899423c07cffeb0a63977771354ff49a6fc8b0eadff70c29b229c17a9751ff12ca00d3d29413d24e39c7bd06db1a105f5f968db6b4f435a3e3d59c9484f786056d46d6cb6484a119ee5b0470a4a7b16a27f23f3f845cb79e1f083616d7c0ef7ebe5b020f8066a1db2206d41f82fa0f9db7bba2e77a0d8c3a73a";
export default function WorkSection() {
    const [projects, setProjects] = useState([]);
    

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/selected-works?populate=*");
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