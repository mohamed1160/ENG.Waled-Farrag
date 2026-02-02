import ProjectCard from "../ProjectCard";
import { projects } from "../../store/data/projects";

export default function WorkSection() {
    const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

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
                {sortedProjects[0] && (
                    <div className="col-start-1 col-end-2">
                        <ProjectCard project={sortedProjects[0]} minHeight="360px" tagsCols={3} />
                    </div>
                )}

                {sortedProjects[1] && (
                    <div className="col-start-2 col-end-4">
                        <ProjectCard project={sortedProjects[1]} minHeight="632px" tagsCols={7} />
                    </div>
                )}

                {sortedProjects[2] && (
                    <div className="col-start-4 col-end-5">
                        <ProjectCard project={sortedProjects[2]} minHeight="360px" tagsCols={3} />
                    </div>
                )}
            </div>

            {/* Full Width */}
            {sortedProjects[3] && <ProjectCard project={sortedProjects[3]} minHeight="100vh" tagsCols={7} />}

            {/* Bottom Grid */}
            <div className="mt-[36px] grid grid-cols-2 gap-6">
                {sortedProjects[4] && <ProjectCard project={sortedProjects[4]} minHeight="75vh" tagsCols={7} />}

                {sortedProjects[5] && <ProjectCard project={sortedProjects[5]} minHeight="75vh" tagsCols={7} />}
            </div>
        </section>
    );
}
