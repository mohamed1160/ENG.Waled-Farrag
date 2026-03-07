// components/ProjectsSection2.jsx
import axios from "axios";
import { useState, useEffect } from "react";

const TOKEN =
    "6e6038e3b4b75899423c07cffeb0a63977771354ff49a6fc8b0eadff70c29b229c17a9751ff12ca00d3d29413d24e39c7bd06db1a105f5f968db6b4f435a3e3d59c9484f786056d46d6cb6484a119ee5b0470a4a7b16a27f23f3f845cb79e1f083616d7c0ef7ebe5b020f8066a1db2206d41f82fa0f9db7bba2e77a0d8c3a73a";
const ProjectsSection2 = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        // sector: "",
        // date: "",
        // country: "",
        image: null, // single image
        type: "",
        // link: "",
        // idNumber: "",
        tags: "", 
    });
    const [editingProject, setEditingProject] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/selected-works?populate=*&_limit=6");
            setProjects(res.data.data || []);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] || null });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageId = null;
            if (formData.image) {
                const uploadForm = new FormData();
                uploadForm.append("files", formData.image);

                const uploadRes = await axios.post("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/upload", uploadForm, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });

                imageId = uploadRes.data[0].id;
                console.log("Uploaded image ID:", imageId);
            }

            const projectData = {
                data: {
                    title: formData.title || "",
                    description: formData.description || "",
                    // sector: formData.sector || "",
                    // date: formData.date || "",
                    // country: formData.country || "",
                    type: formData.type || "",
                    // link: formData.link || "",
                    idNumber: formData.idNumber || "",
                    tags: formData.tags || "", 
                    ...(imageId && { images: imageId }), 
                },
            };

            console.log("Project data to send:", projectData);

            if (editingProject) {
                await axios.put(`https://passionate-bee-93c3fc2f7c.strapiapp.com/api/selected-works/${editingProject.documentId}`, projectData, { headers: { Authorization: `Bearer ${TOKEN}` } });
                alert("Project updated successfully!");
            } else {
                await axios.post("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/selected-works", projectData, { headers: { Authorization: `Bearer ${TOKEN}` } });
                alert("Project added successfully!");
            }

            fetchProjects();
            setFormData({
                title: "",
                description: "",
                // sector: "",
                // date: "",
                // country: "",
                image: null,
                type: "",
                // link: "",
                idNumber: "",
                tags: "", // إعادة تعيين tags
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
            // sector: project.sector || "",
            // date: project.date || "",
            // country: project.country || "",
            image: null, 
            type: project.type || "",
            // link: project.link || "",
            idNumber: project.idNumber || "",
            tags: project.tags || "", 
        });
    };

    const handleDelete = async (documentId) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        try {
            await axios.delete(`https://passionate-bee-93c3fc2f7c.strapiapp.com/api/selected-works/${documentId}`, {
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
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Projects Section 2</h1>

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
                    {/* <input
                        type="text"
                        name="sector"
                        placeholder="Sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    /> */}
                    {/* <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    /> */}
                    {/* <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    /> */}
                    <input
                        type="file"
                        name="image"
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white file:bg-blue-500 file:text-white file:rounded file:px-3 file:py-1 hover:file:bg-blue-600"
                    />
                    <input
                        type="text"
                        name="type"
                        placeholder="Type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    {/* <input
                        type="url"
                        name="link"
                        placeholder="Link"
                        value={formData.link}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    /> */}
                    <input
                        type="text"
                        name="idNumber"
                        placeholder="ID Number"
                        value={formData.idNumber}
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
                {projects.slice(0, 6).map((project) => {
                    return (
                        <div key={project.id} className="bg-white/20 p-4 rounded-lg shadow-md hover:bg-white/30 transition duration-300">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>
                            {/* <p className="text-gray-300">Sector: {project.sector}</p> */}
                            {/* <p className="text-gray-300">Date: {project.date}</p> */}
                            {/* <p className="text-gray-300">Country: {project.country}</p> */}
                            <p className="text-gray-300">Type: {project.type}</p>
                            <p className="text-gray-300">ID Number: {project.idNumber}</p>
                            <p className="text-gray-300">Tags: {project.tags}</p>
                            {/* <p className="text-gray-300">
                                Link:{" "}
                                <a href={project.link} className="text-blue-400 hover:text-blue-300">
                                    {project.link}
                                </a>
                            </p> */}
                            {project.images?.formats.thumbnail.url && (
                                <img src={`${project.images.formats.thumbnail.url}`} alt="Project" className="w-16 h-16 object-cover rounded mt-2" />
                            )}
                            <div className="mt-4 flex space-x-2">
                                <button onClick={() => handleEdit(project)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(project.documentId)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsSection2;
