export default function ProjectCard({ project, minHeight, tagsCols = 3 }) {
    const gridCols = {
        3: "grid-cols-3",
        7: "grid-cols-7",
    };

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="bg-[var(--secondary-2)] w-full rounded-[8px]" style={{ minHeight }} />

            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[20px]">{project.title}</h3>
                <p className="text-[16px] text-[var(--secondary-2)]">{project.description}</p>

                <ul className={`grid ${gridCols[tagsCols]} gap-4`}>
                    <li className="text-[16px] font-medium py-2 bg-[var(--secondary-2)] flex items-center justify-center">{project.tags[0]}</li>

                    {project.tags.slice(1).map((tag, i) => (
                        <li key={i} className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light py-2 flex items-center justify-center">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
