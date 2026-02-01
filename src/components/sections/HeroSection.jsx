import { useState, useEffect } from "react";
import heroBanner from "../../assets/images/heroBanner.png";
import copyright from "../../assets/images/copyright.png";

export default function HeroSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100); // يبدأ بعد 0.1s
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden flex items-center ">
            {/* Hero Image */}
            <img
                src={heroBanner}
                alt="Hero Banner"
                className={`absolute inset-0 w-full h-full object-cover object-center z-0
          transition-transform duration-1000 ease-out
          md:${animate ? "translate-y-0" : "-translate-y-full"}`}
            />

            {/* Overlay Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-16">
                {/* Copyright */}
                <div
                    className={`absolute bottom-4 sm:bottom-6 md:bottom-16
            transition-transform duration-1000 ease-out
            md:${animate ? "translate-x-0" : "-translate-x-full"}`}>
                    <img src={copyright} alt="Copyright" className="w-[120px] sm:w-[160px] md:w-[201px] h-auto" />
                </div>
            </div>
        </section>
    );
}
