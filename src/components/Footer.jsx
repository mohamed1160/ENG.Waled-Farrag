import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordModal from "./PasswordModal";
import logo from "../assets/images/darkLogo.png";
import MailInput from "./UI/MailInput";
import Social from "./UI/Social";

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const links = [
        { name: "Home", path: "/", targetId: "homeSection" },
        { name: "About", path: "/about", targetId: "about" },
        { name: "Work", path: "/work", targetId: "work" },
        { name: "Contact", path: "/contact", targetId: "contact" },
    ];

    const handleLogin = (password) => {
        console.log("Password entered:", password);
    };

    const handleLinkClick = (link) => {
        if (window.innerWidth >= 1024) {
            // Desktop: navigate to page
            navigate(link.path);
        } else {
            // Tablet + Mobile: scroll to section
            const section = document.getElementById(link.targetId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    };

    return (
        <footer className="w-full bg-white px-6 py-10 md:py-12">
            {/* Desktop Layout */}
            <div className="max-w-[1400px] mx-auto hidden sm:flex flex-col gap-6">
                <div className="flex justify-between items-start gap-4">
                    {/* Left: Logo + Tagline */}
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center gap-4">
                            <img src={logo} className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] object-contain" alt="Logo" />
                            <div>
                                <p className="text-black text-[20px] font-light sm:text-[16px]">Creative solution,</p>
                                <p className="text-black text-[24px] font-bold sm:text-[18px]">Real Impact</p>
                            </div>
                        </div>
                    </div>

                    {/* Center: Links */}
                    <ul className="flex flex-1 justify-center gap-8 items-center">
                        {links.map((link) => (
                            <li key={link.name}>
                                <button onClick={() => handleLinkClick(link)} className="text-black text-[15px] hover:text-gray-500 transition">
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Right: Mail Input + Social */}
                    <div className="flex flex-col flex-1 items-end gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-black text-[20px] font-semibold">Get in touch</p>
                            <MailInput size="sm" className="w-[250px]" />
                        </div>
                        <Social />
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600"></div>

                {/* Bottom: Rights & Privacy */}
                <div className="flex justify-center items-center gap-5 text-black text-[12px]">
                    <p>All rights are reserved</p>
                    <p>Privacy & Policy</p>
                    <p className="text-[14px] font-bold cursor-pointer hover:text-gray-500" onClick={() => setModalOpen(true)}>
                        FARRAG ©
                    </p>
                </div>
            </div>

            {/* Tablet Layout */}
            

            {/* Mobile Layout */}
            <div className="sm:hidden md:hidden  flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4">
                    {/* Logo + Tagline */}
                    <div className="flex items-center gap-4">
                        <img src={logo} className="w-[60px] h-[60px] object-contain" alt="Logo" />
                        <div>
                            <p className="text-black text-[20px] font-light">Creative solution,</p>
                            <p className="text-black text-[24px] font-bold">Real Impact</p>
                        </div>
                    </div>

                    {/* Links */}
                    <ul className="flex gap-5 items-center">
                        {links.map((link) => (
                            <li key={link.name}>
                                <button onClick={() => handleLinkClick(link)} className="text-black text-[15px] hover:text-gray-500 transition">
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mail Input + Social */}
                    <div className="flex flex-col items-center gap-3 w-full">
                        <MailInput size="sm" className="w-full" />
                        <Social />
                    </div>

                    {/* Rights & Privacy */}
                    <div className="flex flex-col items-center gap-1 text-black text-[12px]">
                        <p>All rights are reserved</p>
                        <p>Privacy & Policy</p>
                        <p className="text-[14px] font-bold cursor-pointer hover:text-gray-500" onClick={() => setModalOpen(true)}>
                            FARRAG ©
                        </p>
                    </div>
                </div>
            </div>

            {/* Password Modal */}
            <PasswordModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onLogin={handleLogin} />
        </footer>
    );
}
