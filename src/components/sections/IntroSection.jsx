import React, { useState, useEffect, useRef } from "react";
import workPreviewBanner from "../../assets/images/workPreviewBanner.png";

export default function IntroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }, 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full flex flex-col gap-12 sm:gap-16 px-4 sm:px-8 md:px-16">
            {/* Main Text */}
            <h2
                className={`
                    text-xl sm:text-2xl md:text-[36px] font-light w-full sm:w-[90%] md:w-[85%]
                    transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}>
                I help businesses build meaningful brands through strategic thinking and intentional design. Blending strategy with creativity to craft identities that speak, guide, and inspire.
            </h2>

            {/* Image Section */}
            <div
                className={`
                    w-full h-[400px] sm:h-[500px] md:h-[697px] relative overflow-hidden flex items-center justify-center
                    transition-all duration-1000 ease-out delay-300
                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}>
                <img src={workPreviewBanner} className="absolute inset-0 w-full h-full object-cover z-0" alt="Work Preview" />

                <h3
                    className={`
                        relative z-10 text-white text-xl sm:text-3xl md:text-[40px] font-normal text-center px-4
                        transition-all duration-1000 ease-out delay-600
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}>
                    Strategic Minds Create <span className="font-bold">Stronger Brands</span>
                </h3>
            </div>
        </section>
    );
}
