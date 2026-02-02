import React, { useState, useEffect, useRef } from "react";
import CraftWithMe from "../UI/CraftWithMe";

export default function CraftWithMeSection() {
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
        <section ref={sectionRef} id="craft-with-me" className="w-full px-6 md:px-16 flex flex-col gap-6 md:gap-8">
            <p
                className={`
                    text-xl sm:text-2xl md:text-[36px] font-light w-full sm:w-[90%] md:w-[85%]
                    transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}>
                Great brands are built with intention. If you’re ready to create one with clarity and strategy, <span className="font-bold">I’d be glad to help you start.</span>
            </p>
            <div
                className={`
                    w-full flex justify-start md:justify-start
                    transition-all duration-1000 ease-out delay-300
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                `}>
                <CraftWithMe />
            </div>
        </section>
    );
}
