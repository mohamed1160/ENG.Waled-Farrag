import axios from "axios";
import { useState, useEffect } from "react";

const TOKEN =
    "8af8ebf69a94129848d0dddcf013defc01429c620b13e99de4b5ee02ac73c93e14c153486d811f90b47df8d3ca3a7a49d78635f5dc2fbb021d0a13b4b3b95e633f85c793f052c493d38a72f991794b351fe0ae4d92936ea747bff09e08dc992a3175f57d246c7c31143ca727297ba7b54139b7bc5352e0029e2c30948d9b4cb5";

const WorkSection = () => {
    const [works, setWorks] = useState([]);
    const [formData, setFormData] = useState({
        workName: "",
        workImg: null, // single image
        workDescription: "",
        workTags: "",
    });
    const [editingWork, setEditingWork] = useState(null);

    useEffect(() => {
        fetchWorks();
    }, []);

    const fetchWorks = async () => {
        try {
            const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/works?populate=*");
            setWorks(res.data.data || []);
        } catch (error) {
            console.error("Error fetching works:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "workImg") {
            setFormData({ ...formData, workImg: files[0] || null });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageId = null;
            if (formData.workImg) {
                const uploadForm = new FormData();
                uploadForm.append("files", formData.workImg);

                const uploadRes = await axios.post("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/upload", uploadForm, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });

                imageId = uploadRes.data[0].id;
                console.log("Uploaded image ID:", imageId);
            }

            const workData = {
                data: {
                    workName: formData.workName || "",
                    workDescription: formData.workDescription || "",
                    workTags: formData.workTags || "",
                    ...(imageId && { workImg: imageId }), // single media
                },
            };

            console.log("Work data to send:", workData);

            if (editingWork) {
                await axios.put(`https://passionate-bee-93c3fc2f7c.strapiapp.com/api/works/${editingWork.documentId}`, workData, { headers: { Authorization: `Bearer ${TOKEN}` } });
                alert("Work updated successfully!");
            } else {
                await axios.post("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/works", workData, { headers: { Authorization: `Bearer ${TOKEN}` } });
                alert("Work added successfully!");
            }

            fetchWorks();
            setFormData({
                workName: "",
                workImg: null,
                workDescription: "",
                workTags: "",
            });
            setEditingWork(null);
        } catch (error) {
            console.error("Error saving work:", error.response || error);
            console.error("Full Strapi error:", error.response?.data || error);
            alert("Failed to save work. Check console for details.");
        }
    };

    const handleEdit = (work) => {
        setEditingWork(work);
        setFormData({
            workName: work.workName || "",
            workImg: null, 
            workDescription: work.workDescription || "",
            workTags: work.workTags || "",
        });
        // window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDelete = async (documentId) => {
        if (!confirm("Are you sure you want to delete this work?")) return;
        try {
            await axios.delete(`https://passionate-bee-93c3fc2f7c.strapiapp.com/api/works/${documentId}`, {
                headers: { Authorization: `Bearer ${TOKEN}` },
            });
            setWorks(works.filter((w) => w.documentId !== documentId));
            alert("Work deleted successfully!");
        } catch (error) {
            console.error("Error deleting work:", error);
            alert("Failed to delete work.");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Work Section</h1>

            <div className="max-w-4xl mx-auto bg-white/20 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm mb-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="workName"
                        placeholder="Work Name"
                        value={formData.workName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <textarea
                        name="workDescription"
                        placeholder="Work Description"
                        value={formData.workDescription}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <input
                        type="text"
                        name="workTags"
                        placeholder="Work Tags (comma separated)"
                        value={formData.workTags}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400"
                    />
                    <input
                        type="file"
                        name="workImg"
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white file:bg-blue-500 file:text-white file:rounded file:px-3 file:py-1 hover:file:bg-blue-600"
                    />
                    <button type="submit" className="mt-4 col-span-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                        {editingWork ? "Update" : "Add"} Work
                    </button>
                </form>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {works.map((work) => {
                    return (
                        <div key={work.id} className="bg-white/20 p-4 rounded-lg shadow-md hover:bg-white/30 transition duration-300">
                            <h3 className="text-xl font-semibold">{work.workName}</h3>
                            <p className="text-gray-300">{work.workDescription}</p>
                            <p className="text-gray-300">Tags: {work.workTags}</p>
                            {work.workImg?.formats?.thumbnail?.url && (
                                <img src={`${work.workImg.formats.thumbnail.url}`} alt="Work" className="w-16 h-16 object-cover rounded mt-2" />
                            )}
                            <div className="mt-4 flex space-x-2">
                                <button onClick={() => handleEdit(work)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(work.documentId)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
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

export default WorkSection;
