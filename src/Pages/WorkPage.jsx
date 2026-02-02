import React, { useState } from "react";
import CraftWithMeSection from "../components/sections/CraftWithMeSection";
import Swiper from "../components/UI/Swiper";
import StoriesSection from "../components/sections/StoriesSection";

const projectsData = [
    {
        name: "Project One",
        description: "This is a sample project description.",
        tags: ["UI", "Branding", "Design"],
        type: "Branding",
    },
    {
        name: "Project Two",
        description: "This is another sample project description.",
        tags: ["Layout", "Packaging"],
        type: "Layout Design",
    },
    {
        name: "Project Three",
        description: "Yet another example project description.",
        tags: ["Wayfinding", "UI"],
        type: "Wayfinding System",
    },
    {
        name: "Project Four",
        description: "Description for the fourth project.",
        tags: ["Branding", "Design"],
        type: "Branding",
    },
];

export default function WorkPage() {
    const [filter, setFilter] = useState("All");

    // projects حسب الفلتر
    const filteredProjects = filter === "All" ? projectsData : projectsData.filter((project) => project.type === filter);

    const filterTypes = ["All", "Branding", "Layout Design", "Packaging Design", "Wayfinding System"];

    return (
        <main>
            {/* Work Section */}
            <section className="w-full mb-16 mt-30 px-16">
                <div className="title flex flex-col gap-8 w-full">
                    <h2 className="text-[24px] font-light pt-4 pb-4 px-6 border w-fit border-[#F2F2F23F] rounded-sm">Work</h2>
                    <p className="text-[42px] font-light w-[70%]">Purpose-driven design that builds identity, structure, experience, and clarity.</p>
                </div>

                {/* Filter Buttons */}
                <div className="mt-14">
                    <ul className="flex items-center gap-4 border-b border-[#F2F2F23F]">
                        {filterTypes.map((type) => (
                            <li key={type}>
                                <button
                                    onClick={() => setFilter(type)}
                                    className={`hover-underline text-[18px] p-2 transition-all duration-600 ${filter === type ? "font-semibold text-[#A1A1A1]" : ""}`}>
                                    {type}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Projects Grid */}
                    <div className="mt-5">
                        <div className="grid grid-cols-2 gap-6 w-full">
                            {filteredProjects.map((project, index) => (
                                <div key={index} className={`w-full text-white ${index % 2 !== 0 ? "mt-32" : ""}`}>
                                    <div className="bg-[var(--secondary-2)] rounded-[8px] w-full h-[80vh] flex items-center justify-center">
                                        <span className="text-gray-400">Image Placeholder</span>
                                    </div>
                                    <div className="w-full flex flex-col gap-2 mt-4">
                                        <h3 className="font-semibold text-[20px]">{project.name}</h3>
                                        <p className="text-[16px] text-[var(--secondary-2)]">{project.description}</p>
                                        <div className="mt-4">
                                            <ul className="flex gap-4 flex-wrap">
                                                <li className="text-[16px] font-medium pt-2 pb-2 px-3 bg-[var(--secondary-2)] rounded-full">Type: {project.type}</li>
                                                {project.tags.map((tag, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-full font-light pt-2 pb-2 px-3 flex items-center justify-center">
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

            {/* Stories Section */}
            <StoriesSection />

            <CraftWithMeSection  />
        </main>
    );
}
