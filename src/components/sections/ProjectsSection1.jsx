// components/ProjectsSection1.jsx
import axios from "axios";
import { useState, useEffect } from "react";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097";

const ProjectsSection1 = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        sector: "",
        date: "",
        country: "",
        images: [], // array for multiple images
        thumbnail: null, // single image for thumbnail
        type: "",
        link: "",
        tags: "", 
    });
    const [editingProject, setEditingProject] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await axios.get("http://localhost:1337/api/all-projects?populate=*", {
                headers: { Authorization: `Bearer ${TOKEN}` },
            });
            setProjects(res.data.data || []);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "images") {
            setFormData({ ...formData, images: files ? Array.from(files) : [] });
        } else if (name === "thumbnail") {
            setFormData({ ...formData, thumbnail: files[0] || null });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageIds = [];
            if (formData.images.length > 0) {
                const uploadForm = new FormData();
                formData.images.forEach((img) => uploadForm.append("files", img));

                const uploadRes = await axios.post("http://localhost:1337/api/upload", uploadForm, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });

                imageIds = uploadRes.data.map((file) => file.id);
                console.log("Uploaded image IDs:", imageIds);
            }

            let thumbnailId = null;
            if (formData.thumbnail) {
                const uploadForm = new FormData();
                uploadForm.append("files", formData.thumbnail);

                const uploadRes = await axios.post("http://localhost:1337/api/upload", uploadForm, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });

                thumbnailId = uploadRes.data[0].id;
                console.log("Uploaded thumbnail ID:", thumbnailId);
            }

            const projectData = {
                data: {
                    title: formData.title || "",
                    description: formData.description || "",
                    sector: formData.sector || "",
                    date: formData.date || "",
                    country: formData.country || "",
                    type: formData.type || "",
                    link: formData.link || "",
                    tags: formData.tags || "", 
                    ...(imageIds.length > 0 && { images: imageIds }),
                    ...(thumbnailId && { thumbnail: thumbnailId }), 
                },
            };

            console.log("Project data to send:", projectData);

            if (editingProject) {
                await axios.put(`http://localhost:1337/api/all-projects/${editingProject.documentId}`, projectData, { headers: { Authorization: `Bearer ${TOKEN}` } });
                alert("Project updated successfully!");
            } else {
                await axios.post("http://localhost:1337/api/all-projects", projectData, {
                    headers: { Authorization: `Bearer ${TOKEN}` },
                });
                alert("Project added successfully!");
            }

            fetchProjects();
            setFormData({
                title: "",
                description: "",
                sector: "",
                date: "",
                country: "",
                images: [],
                thumbnail: null, 
                type: "",
                link: "",
                tags: "", 
            });
            setEditingProject(null);
        } catch (error) {
            console.error("Error saving project:", error.response || error);
            console.error("Full Strapi error:", error.response?.data || error);
            alert("Failed to save project. Check console for details.");
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setFormData({
            title: project.title || "",
            description: project.description || "",
            sector: project.sector || "",
            date: project.date || "",
            country: project.country || "",
            images: [], 
            thumbnail: null, 
            type: project.type || "",
            link: project.link || "",
            tags: project.tags || "", 
        });
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    };

    const handleDelete = async (documentId) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        try {
            await axios.delete(`http://localhost:1337/api/all-projects/${documentId}`, {
                headers: { Authorization: `Bearer ${TOKEN}` },
            });
            setProjects(projects.filter((p) => p.documentId !== documentId));
            alert("Project deleted successfully!");
        } catch (error) {
            console.error("Error deleting project:", error);
            alert("Failed to delete project.");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Projects Section 1</h1>

            <div className="max-w-4xl mx-auto bg-white/20 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm mb-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="sector"
                        placeholder="Sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <div className="flex flex-col">
                        <label className="text-white mb-1">Images (multiple)</label>
                        <input
                            type="file"
                            name="images"
                            multiple
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white file:bg-blue-500 file:text-white file:rounded file:px-3 file:py-1 hover:file:bg-blue-600"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white mb-1">Thumbnail (single image)</label>
                        <input
                            type="file"
                            name="thumbnail"
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white file:bg-blue-500 file:text-white file:rounded file:px-3 file:py-1 hover:file:bg-blue-600"
                        />
                    </div>
                    <input
                        type="text"
                        name="type"
                        placeholder="Type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <input
                        type="url"
                        name="link"
                        placeholder="Link"
                        value={formData.link}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="tags"
                        placeholder="Tags (comma separated)"
                        value={formData.tags}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <button type="submit" className="mt-4 col-span-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                        {editingProject ? "Update" : "Add"} Project
                    </button>
                </form>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white/20 p-4 rounded-lg shadow-md hover:bg-white/30 transition duration-300">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        <p className="text-gray-300">Sector: {project.sector}</p>
                        <p className="text-gray-300">Date: {project.date}</p>
                        <p className="text-gray-300">Country: {project.country}</p>
                        <p className="text-gray-300">Type: {project.type}</p>
                        <p className="text-gray-300">Tags: {project.tags}</p>
                        <p className="text-gray-300">
                            Link:{" "}
                            <a href={project.link} className="text-blue-400 hover:text-blue-300">
                                {project.link}
                            </a>
                        </p>
                        {project.thumbnail && (
                            <img src={`http://localhost:1337${project.thumbnail.formats?.thumbnail?.url || project.thumbnail.url}`} alt="Thumbnail" className="w-16 h-16 object-cover rounded mt-2" />
                        )}
                        {project.images?.length > 0 &&
                            project.images.map((img, idx) => (
                                <img key={idx} src={`http://localhost:1337${img.formats?.thumbnail?.url || img.url}`} alt="Project" className="w-16 h-16 object-cover rounded mt-2" />
                            ))}
                        <div className="mt-4 flex space-x-2">
                            <button onClick={() => handleEdit(project)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(project.documentId)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection1;
