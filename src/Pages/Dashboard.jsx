import React, { useState } from "react";

function Dashboard() {
    // State for Projects
    const [projects, setProjects] = useState([]);
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectTags, setProjectTags] = useState("");
    const [projectType, setProjectType] = useState("");
    const [projectImages, setProjectImages] = useState([]);

    // State for Clients
    const [clients, setClients] = useState([]);
    const [clientImage, setClientImage] = useState(null);

    // State for Featured Projects (max 6)
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [featuredTitle, setFeaturedTitle] = useState("");
    const [featuredDescription, setFeaturedDescription] = useState("");
    const [featuredTags, setFeaturedTags] = useState("");
    const [featuredType, setFeaturedType] = useState("");
    const [featuredImages, setFeaturedImages] = useState([]);

    // State for Phone Number
    const [tempPhoneNumber, setTempPhoneNumber] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // Handle adding a project
    const addProject = () => {
        if (projectTitle && projectDescription && projectType) {
            const newProject = {
                id: Date.now(),
                title: projectTitle,
                description: projectDescription,
                tags: projectTags.split(",").map((tag) => tag.trim()),
                type: projectType,
                images: projectImages,
            };
            setProjects([...projects, newProject]);
            // Reset form
            setProjectTitle("");
            setProjectDescription("");
            setProjectTags("");
            setProjectType("");
            setProjectImages([]);
        }
    };

    // Handle deleting a project
    const deleteProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    // Handle image upload for projects
    const handleProjectImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setProjectImages(files);
    };

    // Handle adding a client
    const addClient = () => {
        if (clientImage) {
            const newClient = {
                id: Date.now(),
                image: URL.createObjectURL(clientImage),
            };
            setClients([...clients, newClient]);
            setClientImage(null);
        }
    };

    // Handle deleting a client
    const deleteClient = (id) => {
        setClients(clients.filter((client) => client.id !== id));
    };

    // Handle adding a featured project (max 6)
    const addFeaturedProject = () => {
        if (featuredProjects.length < 6 && featuredTitle && featuredDescription && featuredType) {
            const newFeatured = {
                id: Date.now(),
                title: featuredTitle,
                description: featuredDescription,
                tags: featuredTags.split(",").map((tag) => tag.trim()),
                type: featuredType,
                images: featuredImages,
            };
            setFeaturedProjects([...featuredProjects, newFeatured]);
            // Reset form
            setFeaturedTitle("");
            setFeaturedDescription("");
            setFeaturedTags("");
            setFeaturedType("");
            setFeaturedImages([]);
        }
    };

    // Handle deleting a featured project
    const deleteFeaturedProject = (id) => {
        setFeaturedProjects(featuredProjects.filter((project) => project.id !== id));
    };

    // Handle image upload for featured projects
    const handleFeaturedImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFeaturedImages(files);
    };

    // Handle phone number update
    const handleTempPhoneChange = (e) => {
        setTempPhoneNumber(e.target.value);
    };

    const confirmPhoneNumber = () => {
        setPhoneNumber(tempPhoneNumber);
        setTempPhoneNumber(""); // Clear the input after confirming
    };

    return (
        <div className="min-h-screen bg-black mt-20 p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Portfolio Dashboard</h1>
            {/* Projects Section */}
            <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Projects</h2>
                <div className="bg-white/20 p-4 sm:p-6 rounded-lg shadow-md mb-6">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
                    />
                    <textarea
                        placeholder="Project Description"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
                    />
                    <input
                        type="text"
                        placeholder="Tags (comma separated)"
                        value={projectTags}
                        onChange={(e) => setProjectTags(e.target.value)}
                        className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
                    />
                    <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="w-full p-2 mb-4 border rounded text-sm sm:text-base">
                        <option value="" className="text-black">
                            Select Type
                        </option>
                        <option value="Branding" className="text-black">
                            Branding
                        </option>
                        <option value="Layout Design" className="text-black">
                            Layout Design
                        </option>
                        <option value="Packaging Design" className="text-black">
                            Packaging Design
                        </option>
                        <option value="Wayfinding System" className="text-black">
                            Wayfinding System
                        </option>
                    </select>
                    <input type="file" multiple onChange={handleProjectImageUpload} className="w-full border cursor-pointer p-2 mb-4 text-sm sm:text-base" />
                    <button onClick={addProject} className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base">
                        Add Project
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white/20 p-4 rounded-lg shadow-md">
                            <h3 className="font-bold text-sm sm:text-base">{project.title}</h3>
                            <p className="text-sm sm:text-base">{project.description}</p>
                            <p className="text-sm sm:text-base">Tags: {project.tags.join(", ")}</p>
                            <p className="text-sm sm:text-base">Type: {project.type}</p>
                            <div className="flex flex-wrap mt-2">
                                {project.images.map((img, idx) => (
                                    <img key={idx} src={URL.createObjectURL(img)} alt="Project" className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-2 mb-2" />
                                ))}
                            </div>
                            <button onClick={() => deleteProject(project.id)} className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded mt-2 text-sm sm:text-base">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            {/* Clients Section */}
            <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Clients</h2>
                <div className="bg-white/20 p-4 sm:p-6 rounded-lg shadow-md mb-6">
                    <input type="file" onChange={(e) => setClientImage(e.target.files[0])} className="w-full border cursor-pointer p-2 mb-4 text-sm sm:text-base" />
                    <button onClick={addClient} className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base">
                        Add Client
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {clients.map((client) => (
                        <div key={client.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={client.image} alt="Client" className="w-full h-24 sm:h-32 object-cover mb-2" />
                            <button onClick={() => deleteClient(client.id)} className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            {/* Featured Projects Section (Max 6) */}
            <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Featured Projects (Max 6)</h2>
                <div className="bg-white/20 p-4 sm:p-6 rounded-lg shadow-md mb-6">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={featuredTitle}
                        onChange={(e) => setFeaturedTitle(e.target.value)}
                        className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
                    />
                    <textarea
                        placeholder="Project Description"
                        value={featuredDescription}
                        onChange={(e) => setFeaturedDescription(e.target.value)}
                        className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
                    />
                    <input
                        type="text"
                        placeholder="Tags (comma separated)"
                        value={featuredTags}
                        onChange={(e) => setFeaturedTags(e.target.value)}
                        className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
                    />
                    <select value={featuredType} onChange={(e) => setFeaturedType(e.target.value)} className="w-full p-2 mb-4 border rounded text-sm sm:text-base">
                        <option value="" className="text-black">
                            Select Type
                        </option>
                        <option value="Branding" className="text-black">
                            Branding
                        </option>
                        <option value="Layout Design" className="text-black">
                            Layout Design
                        </option>
                        <option value="Packaging Design" className="text-black">
                            Packaging Design
                        </option>
                        <option value="Wayfinding System" className="text-black">
                            Wayfinding System
                        </option>
                    </select>
                    <input type="file" multiple onChange={handleFeaturedImageUpload} className="w-full p-2 mb-4 text-sm sm:text-base" />
                    <button onClick={addFeaturedProject} className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base" disabled={featuredProjects.length >= 6}>
                        Add Featured Project
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="bg-white/20 p-4 rounded-lg shadow-md">
                            <h3 className="font-bold text-sm sm:text-base">{project.title}</h3>
                            <p className="text-sm sm:text-base">{project.description}</p>
                            <p className="text-sm sm:text-base">Tags: {project.tags.join(", ")}</p>
                            <p className="text-sm sm:text-base">Type: {project.type}</p>
                            <div className="flex flex-wrap mt-2">
                                {project.images.map((img, idx) => (
                                    <img key={idx} src={URL.createObjectURL(img)} alt="Featured Project" className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-2 mb-2" />
                                ))}
                            </div>
                            <button onClick={() => deleteFeaturedProject(project.id)} className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded mt-2 text-sm sm:text-base">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Phone Number</h2>
                <div className="bg-white/20 p-4 sm:p-6 rounded-lg shadow-md">
                    <input type="text" placeholder="Enter Phone Number" value={tempPhoneNumber} onChange={handleTempPhoneChange} className="w-full p-2 border rounded mb-4 text-sm sm:text-base" />
                    <button onClick={confirmPhoneNumber} className="bg-blue-500 text-white px-4 py-2 rounded mb-4 text-sm sm:text-base">
                        Done
                    </button>
                    {phoneNumber && (
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <p className="text-gray-700 text-sm sm:text-base">Current Phone Number: {phoneNumber}</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
