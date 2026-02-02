import React, { useState, useEffect, useRef } from "react";

export default function OurMissionSection() {
    const rawCardsData = [
        { id: 1, type: "specialties", icon: "specialties-svg", number: 4, label: "Specialties" },
        { id: 2, type: "projects", icon: "projects-svg", number: 50, label: "Projects" },
        { id: 3, type: "years", icon: "years-svg", number: 4, label: "Years" },
        { id: 4, type: "specialties", icon: "specialties-svg", number: 4, label: "Specialties" }, 
        { id: 5, type: "projects", icon: "projects-svg", number: 50, label: "Projects" }, 
    ];

    const uniqueTypes = new Set();
    const uniqueCardsData = rawCardsData.filter((card) => {
        if (!uniqueTypes.has(card.type)) {
            uniqueTypes.add(card.type);
            return true;
        }
        return false;
    });

    const [animatedNumbers, setAnimatedNumbers] = useState({});
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        uniqueCardsData.forEach((card) => {
                            animateNumber(card.type, card.number, 2000);
                        });
                        observer.disconnect(); 
                    }
                });
            },
            { threshold: 0.5 }, 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []); 

    const animateNumber = (type, target, duration) => {
        const start = 0;
        const increment = target / (duration / 50); 
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setAnimatedNumbers((prev) => ({ ...prev, [type]: target }));
                clearInterval(timer);
            } else {
                setAnimatedNumbers((prev) => ({ ...prev, [type]: Math.floor(current) }));
            }
        }, 50);
    };

    const renderIcon = (type) => {
        switch (type) {
            case "specialties":
                return (
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="h-13 w-13 text-black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1021.06 839.968L833.798 493.664c19.104-43.36 29.792-91.28 29.792-141.696C863.59 157.664 706.07.16 511.782.16c-194.336 0-351.84 157.52-351.84 351.808 0 51.632 11.216 100.624 31.184 144.784L3.03 839.808c-6.065 11.024-5.057 24.624 2.527 34.688 7.6 10.033 20.432 14.752 32.687 11.873l160.624-36.848 54.976 153.12c4.288 11.904 15.152 20.16 27.744 21.088.817.064 1.6.096 2.368.096a32.002 32.002 0 0 0 28.192-16.88L475.844 701.97a355.152 355.152 0 0 0 35.92 1.808c11.12 0 22.095-.576 32.943-1.6l167.248 305.008a31.984 31.984 0 0 0 30.56 16.527c12.56-1.008 23.376-9.248 27.631-21.088l54.976-153.12 160.624 36.848c12.32 2.975 25.024-1.809 32.624-11.809 7.632-9.984 8.656-23.52 2.688-34.576zm-731.282 73.376L249.52 801.183c-5.504-15.248-21.471-24.128-37.28-20.368l-118.8 27.248L228.85 561.087c44.592 60.24 107.952 105.68 181.44 127.793zm-65.553-561.377c0-158.544 129.009-287.536 287.568-287.536 158.544 0 287.536 128.992 287.536 287.536S670.337 639.535 511.793 639.535c-158.576 0-287.568-129.024-287.568-287.568zm587.52 428.847c-15.872-3.744-31.776 5.12-37.28 20.367l-40.529 112.976-123.152-224.56c75.44-22.096 140.337-68.735 185.505-130.735L931.137 808.19z"></path>
                    </svg>
                );
            case "projects":
                return (
                    <svg
                        stroke="currentColor"
                        fill="none"
                        className="text-black w-15 h-15"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="200px"
                        width="200px"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z"></path>
                        <path d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"></path>
                        <path d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"></path>
                    </svg>
                );
            case "years":
                return (
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black w-13 h-13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section ref={sectionRef} className="w-full mt-16 px-6 md:px-16 flex flex-col gap-16 md:gap-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-[36px] font-semibold">Our Mission</h2>
                <p className="text-[32px] text-[#f2f2f2] font-light">
                    With a focus on clarity, structure, and purpose, I craft identities and systems that elevate how brands look, feel, and communicate.
                </p>
            </div>
            <div className="w-full h-[278px] grid grid-cols-3 gap-[24.5px]">
                {uniqueCardsData.map((card) => (
                    <div key={card.id} className="w-full h-full bg-white/10 rounded-2xl px-4 py-[22px] flex flex-col gap-[18px] items-center justify-center">
                        <div className="icon flex items-center justify-center w-[115px] h-[115px] rounded-[50%] bg-white p-[30px]">{renderIcon(card.type)}</div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="text-[48px] font-bold text-[#f2f2f2]">+{animatedNumbers[card.type] || 0}</h3>
                            <p className="text-[24px] font-medium text-[#f2f2f2]">{card.label}</p>
                            <p></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
