import React, { useState, useEffect, useRef } from "react";
import Swiper from "../UI/Swiper";

export default function StoriesSection() {
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
        <section ref={sectionRef} className="w-full px-16 mt-16 mb-16">
            <div className="title flex flex-col gap-8 w-full">
                <h2
                    className={`
                        text-[24px] font-light pt-4 pb-4 px-6 border w-fit border-[#F2F2F23F] rounded-sm
                        transition-all duration-1000 ease-out
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}>
                    Stories Built With Clients:
                </h2>
                <p
                    className={`
                        text-[42px] font-light w-[97%]
                        transition-all duration-1000 ease-out delay-200
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}>
                    Behind every brand I design, there's a client with a story worth shaping. Together, we turn challenges into direction and ideas into identities that reflect who they are—and who
                    they're becoming.
                </p>
            </div>

            <div
                className={`
                    mt-16 mb-16 h-[163px]
                    transition-all duration-1000 ease-out delay-400
                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}>
                <Swiper />
            </div>
        </section>
    );
}
