import axios from "axios";
import { useState, useEffect } from "react";

const TOKEN =
    "5997d4bba22afd7281e1150ce69de812fcfe638a2aa7b43bdaed83147104ec8223f22811c13bad1d8b9843ec1f3f8b7ee57a50dc35f911ce2fcf8ad75d2ec1515cf371d573a53119aa2c91ec3e35a1d9d470eeea5f92849c2bf339a0eb35ebb0ae3b21bf86ec8e23a0c8a5c22be35a3dbf061f171164ef3df4323eddb5f79e22";

function ClientsSection() {
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const [clients, setClients] = useState([]); 
    const [editingClient, setEditingClient] = useState(null); 
    const [editName, setEditName] = useState("");
    const [editFile, setEditFile] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/clients?populate=*", {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });
                // console.log("Fetched clients data:", res.data);
                setClients(res.data.data); 
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };
        fetchClients();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageId = null;
            if (file) {
                const formData = new FormData();
                formData.append("files", file);

                const uploadRes = await axios.post("http://localhost:1337/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });

                imageId = uploadRes.data[0].id;
                console.log("Uploaded image ID:", imageId);
            }

            const clientData = {
                data: {
                    name: name,
                },
            };
            if (imageId) {
                clientData.data.logo = imageId; 
            }

            const clientRes = await axios.post("http://localhost:1337/api/clients", clientData, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            });

            console.log("Client saved:", clientRes.data);
            alert("Client saved successfully!");
            const fetchRes = await axios.get("http://localhost:1337/api/clients?populate=*", {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            });
            setClients(fetchRes.data.data);
            setName("");
            setFile(null);
        } catch (error) {
            console.error("Error saving client:", error.response || error);
            alert("Failed to save client. Check console for details.");
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this client?")) return;
        try {
            await axios.delete(`http://localhost:1337/api/clients/${id}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            });
            setClients(clients.filter((client) => client.id !== id));
            alert("Client deleted successfully!");
        } catch (error) {
            console.error("Error deleting client:", error);
            alert("Failed to delete client.");
        }
    };

    const startEdit = (client) => {
        setEditingClient(client); 
        setEditName(client.name || "");
        setEditFile(null);
    };

    const handleEdit = async () => {
        try {
            let imageId = editingClient?.logo?.id; 
            if (editFile) {
                const formData = new FormData();
                formData.append("files", editFile);

                const uploadRes = await axios.post("http://localhost:1337/api/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                });

                imageId = uploadRes.data[0].id;
            }

            const updateData = {
                data: {
                    name: editName,
                },
            };
            if (imageId) {
                updateData.data.logo = imageId; 
            }

            const updateRes = await axios.put(
                `http://localhost:1337/api/clients/${editingClient.documentId}`,
                updateData,
                {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                    },
                },
            );

            console.log("Client updated:", updateRes.data);
            alert("Client updated successfully!");
            const fetchRes = await axios.get("http://localhost:1337/api/clients?populate=*", {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                },
            });
            setClients(fetchRes.data.data);
            setEditingClient(null);
            setEditName("");
            setEditFile(null);
        } catch (error) {
            console.error("Error updating client:", error.response || error);
            alert("Failed to update client. Check console for details.");
        }
    };

    const cancelEdit = () => {
        setEditingClient(null);
        setEditName("");
        setEditFile(null);
    };

    return (
        <div className="bg-black text-white p-4 sm:p-6 md=p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Add Client</h1>
            <div className="max-w-md mx-auto bg-white/20 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm mb-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Client Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        accept="image/*"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white file:bg-blue-500 file:text-white file:border-none file:rounded file:px-3 file:py-1 file:mr-3 hover:file:bg-blue-600 transition duration-300"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                        Add Client
                    </button>
                </form>
            </div>

            {/*  display clients  */}
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Existing Clients</h2>
            <div className="max-w-4xl mx-auto space-y-4">
                {clients.length === 0 ? (
                    <p className="text-center text-gray-400">No clients found.</p>
                ) : (
                    clients.map((client) => {
                        console.log("Rendering client:", client);
                        console.log("Client name:", client.name);
                        console.log("Client logo:", client.logo);
                        return (
                            <div key={client.id} className="bg-white/20 p-4 rounded-lg shadow-lg backdrop-blur-sm flex items-center justify-between">
                                {editingClient?.id === client.id ? (
                                    <div className="flex-1 space-y-2">
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded bg-white/10 text-white placeholder-gray-400"
                                        />
                                        <input
                                            type="file"
                                            onChange={(e) => setEditFile(e.target.files[0])}
                                            accept="image/*"
                                            className="w-full p-2 border border-gray-300 rounded bg-white/10 text-white file:bg-blue-500 file:text-white file:border-none file:rounded file:px-2 file:py-1 file:mr-2"
                                        />
                                        <div className="flex space-x-2">
                                            <button onClick={() => handleEdit()} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                                                Save
                                            </button>
                                            <button onClick={cancelEdit} className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center space-x-4">
                                            {client.logo?.url ? (
                                                <img src={`http://localhost:1337${client.logo.url}`} alt={client.name || "Client Logo"} className="w-12 h-12 rounded-full object-cover" />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm">No Logo</div>
                                            )}
                                            <span className="text-lg font-semibold">{client.name || "No Name"}</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button onClick={() => startEdit(client)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(client.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                                Delete
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default ClientsSection;
