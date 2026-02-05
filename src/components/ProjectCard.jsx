export default function ProjectCard({ project, minHeight, tagsCols = 3 }) {
    const gridCols = {
        3: "grid-cols-3",
        7: "grid-cols-7",
    };
    console.log("Project in ProjectCard:", project);

    // Ensure tags is an array; if it's a string, split by comma and trim
    let tags = [];
    if (Array.isArray(project.tags)) {
        tags = project.tags;
    } else if (typeof project.tags === "string") {
        tags = project.tags.split(",").map((tag) => tag.trim());
    }

    return (
        <div className="w-full flex flex-col gap-4">
            {/* Display image if available, else fallback to the colored div */}
            {project.images ? (
                <img
                    src={`http://localhost:1337${project.images.url}`}
                    alt={project.title}
                    className="w-full rounded-[8px] object-cover hover:scale-105 transition-transform duration-300"
                    style={{ minHeight }}
                />
            ) : (
                <div className="bg-[var(--secondary-2)] w-full rounded-[8px] hover:scale-105 transition-transform duration-300" style={{ minHeight }} />
            )}

            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[20px]">{project.title}</h3>
                <p className="text-[16px] text-[var(--secondary-2)]">{project.description}</p>

                {tags.length > 0 && (
                    <ul className={`flex flex-wrap gap-4`}>
                        <li className="text-[16px] font-medium py-2 bg-[var(--secondary-2)] flex items-center justify-center px-4 rounded-[60px]">{project.type}</li>
                        {tags.slice(1).map((tag, i) => (
                            <li key={i} className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light py-2 px-4 flex items-center justify-center">
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
