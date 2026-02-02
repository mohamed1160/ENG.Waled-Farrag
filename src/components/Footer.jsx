import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordModal from "./PasswordModal";
import logo from "../assets/images/darkLogo.png";
import MailInput from "./UI/MailInput";
import Social from "./UI/Social";
import { motion } from "framer-motion"; 

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
        if (password === "123456") {
            navigate("/AdminDashboard");
            setModalOpen(false);
        } else {
            alert("Incorrect password. Please try again.");
        }
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

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } },
    };

    const linksVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, staggerChildren: 0.1 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    const rightSectionVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    };

    const bottomVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
    };

    return (
        <footer className="w-full bg-white mt-16 px-6 py-10 md:py-12">
            {/* Desktop Layout */}
            <motion.div className="max-w-[1400px] mx-auto hidden sm:flex flex-col gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <div className="flex justify-between items-start gap-4">
                    {/* Left: Logo + Tagline */}
                    <motion.div className="flex flex-col gap-2 flex-1" variants={logoVariants}>
                        <div className="flex items-center gap-4">
                            <img src={logo} className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] object-contain" alt="Logo" />
                            <div>
                                <p className="text-black text-[20px] font-light sm:text-[16px]">Creative solution,</p>
                                <p className="text-black text-[24px] font-bold sm:text-[18px]">Real Impact</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center: Links */}
                    <motion.ul className="flex flex-1 justify-center gap-8 items-center" variants={linksVariants}>
                        {links.map((link) => (
                            <motion.li key={link.name} variants={linkVariants}>
                                <button onClick={() => handleLinkClick(link)} className="text-black text-[15px] hover:text-gray-500 transition">
                                    {link.name}
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Right: Mail Input + Social */}
                    <motion.div className="flex flex-col flex-1 items-end gap-3" variants={rightSectionVariants}>
                        <div className="flex flex-col gap-2">
                            <p className="text-black text-[20px] font-semibold">Get in touch</p>
                            <MailInput size="sm" className="w-[250px]" />
                        </div>
                        <Social />
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600"></div>

                {/* Bottom: Rights & Privacy */}
                <motion.div className="flex justify-center items-center gap-5 text-black text-[12px]" variants={bottomVariants}>
                    <p>All rights are reserved</p>
                    <p>Privacy & Policy</p>
                    <p className="text-[14px] font-bold cursor-pointer hover:text-gray-500" onClick={() => setModalOpen(true)}>
                        FARRAG ©
                    </p>
                </motion.div>
            </motion.div>

            {/* Tablet Layout */}

            {/* Mobile Layout */}
            <motion.div className="sm:hidden md:hidden flex flex-col gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <div className="flex flex-col items-center gap-4">
                    {/* Logo + Tagline */}
                    <motion.div className="flex items-center gap-4" variants={logoVariants}>
                        <img src={logo} className="w-[60px] h-[60px] object-contain" alt="Logo" />
                        <div>
                            <p className="text-black text-[20px] font-light">Creative solution,</p>
                            <p className="text-black text-[24px] font-bold">Real Impact</p>
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.ul className="flex gap-5 items-center" variants={linksVariants}>
                        {links.map((link) => (
                            <motion.li key={link.name} variants={linkVariants}>
                                <button onClick={() => handleLinkClick(link)} className="text-black text-[15px] hover:text-gray-500 transition">
                                    {link.name}
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Mail Input + Social */}
                    <motion.div className="flex flex-col items-center gap-3 w-full" variants={rightSectionVariants}>
                        <MailInput size="sm" className="w-full" />
                        <Social />
                    </motion.div>

                    {/* Rights & Privacy */}
                    <motion.div className="flex flex-col items-center gap-1 text-black text-[12px]" variants={bottomVariants}>
                        <p>All rights are reserved</p>
                        <p>Privacy & Policy</p>
                        <p className="text-[14px] font-bold cursor-pointer hover:text-gray-500" onClick={() => setModalOpen(true)}>
                            FARRAG ©
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Password Modal */}
            <PasswordModal isOpen={modalOpen} onClose={() => setModalOpen(false)
                
            } onLogin={handleLogin} />
        </footer>
    );
}
