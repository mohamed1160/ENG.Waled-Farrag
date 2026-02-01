import { useState, useEffect } from "react";
import ContactBtn from "./UI/ContactBtn";
import Logo from "../assets/images/mainLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    // const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const navLinks = [
        { name: "Home", path: "/", targetId: "home" },
        { name: "About", path: "/about", targetId: "about" },
        { name: "Work", path: "/work", targetId: "work" },
        { name: "Contact", path: "/contact", targetId: "contact" },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const handleMobileScroll = (targetId) => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-transform duration-700 ease-out
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
            <nav className="backdrop-blur-md bg-black/20 border-b border-[#F2F2F23F] px-6 md:px-16 py-4 flex items-center justify-between transition-all duration-700">
                {/* Logo */}
                <div className="h-10 w-20 md:h-full md:w-20">
                    <img src={Logo} alt="logo" className="h-full w-full object-contain" />
                </div>

                {/* Desktop Links + Button */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-[35px]">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <li key={link.name} className="relative">
                                    <Link
                                        to={link.path}
                                        className={`text-[1.1rem] p-2.5 transition-colors duration-300
                                        ${isActive ? "text-white font-semibold" : "text-gray-300"}`}>
                                        {link.name}
                                    </Link>
                                    {/* underline فقط للينك الحالي */}
                                    {isActive && <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white"></span>}
                                </li>
                            );
                        })}
                    </ul>
                    <ContactBtn />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-2 text-white focus:outline-none">
                        <span className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-6 gap-6 md:hidden">
                        {navLinks.map((link) => {
                            if (link.name === "Home") return null; // تجاهل الهوم
                            return (
                                <button key={link.name} onClick={() => handleMobileScroll(link.targetId)} className="text-lg p-2 text-gray-300 hover:text-white transition">
                                    {link.name}
                                </button>
                            );
                        })}
                        <ContactBtn />
                    </div>
                )}
            </nav>
        </header>
    );
}
