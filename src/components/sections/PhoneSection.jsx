import React, { useState, useEffect } from "react";

const PhoneSection = () => {
    const [phone, setPhone] = useState("");
    const [savedPhone, setSavedPhone] = useState("");

    useEffect(() => {
        fetchPhone();
    }, []);

    const fetchPhone = async () => {
        try {
            const response = await fetch("http://localhost:1337/api/phone");
            const data = await response.json();
            console.log("Phone API response:", data);

            const number = data?.data?.attributes?.phone || data?.attributes?.phone || "";
            setSavedPhone(number);
            setPhone(number); 
        } catch (error) {
            console.error("Error fetching phone:", error);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1337/api/phone", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: { phone: phone } }),
            });

            const data = await response.json();
            console.log("Phone update response:", data);

            const number = data?.data?.attributes?.phone || data?.attributes?.phone || phone;
            setSavedPhone(number);
            setPhone(number); 
        } catch (error) {
            console.error("Error saving phone:", error);
        }
    };

    return (
        <div className="bg-black text-white p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Phone Section</h1>
            <div className="max-w-md mx-auto bg-white/20 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                 Done
                    </button>
                </form>

                
            </div>
        </div>
    );
};

export default PhoneSection;
