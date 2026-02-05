import React from "react";
import ProjectsSection1 from "../components/sections/ProjectsSection1";
import ProjectsSection2 from "../components/sections/ProjectsSection2";
import ClientsSection from "../components/sections/ClientsSection";
import PhoneSection from "../components/sections/PhoneSection";
import { useNavigate } from "react-router-dom";
import AddWorkSection from "../components/sections/AddWorkSection";
import SetAuthData from "../components/sections/SetAuthData";

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear(); 

        navigate("/");
    };

    return (
        <div className="min-h-screen mt-25 bg-black text-white p-3">
                <button onClick={logout} className="  float-right  bg-red-500 text-white px-4 py-5 rounded hover:bg-red-600 transition">Logout</button>
            <h1 className="text-3xl font-bold mb-8 text-center ">Dashboard</h1>

            <div className="space-y-3">
                <ProjectsSection1 />
                <ProjectsSection2 />
                <ClientsSection />
                <PhoneSection />
                <AddWorkSection />
                <SetAuthData />
            </div>
        </div>
    );
};

export default Dashboard;
