import React, { useState, useEffect, useRef } from "react";
import Social from "../UI/Social";
import axios from "axios";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097";


export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState("201234567890"); 

    useEffect(() => {
        const fetchPhoneNumber = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/phone", { headers: { Authorization: `Bearer ${TOKEN}` } });
                const phone = res.data?.data?.phone;
                setPhoneNumber(phone || "201234567890");

                // console.log(res.data.data.phone);
            } catch (error) {
                console.error("Error fetching phone number:", error);
            }
        };

        fetchPhoneNumber();
    }, []);

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
        <div ref={sectionRef} id="contact" className="container flex flex-col justify-center items-center bg-[#090909] rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-10 text-white">
            <div className="contact-container text-center my-5 sm:my-6 md:my-8 lg:my-10">
                <h2
                    className={`
                        text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[52px] font-[600] w-3/4 mx-auto
                        transition-all duration-1000 ease-out
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}>
                    Let's build something amazing together
                </h2>
                <p
                    className={`
                        text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-[400] text-[#707070] mt-2 sm:mt-3 md:mt-4
                        transition-all duration-1000 ease-out delay-200
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}>
                    "Let’s bring your idea to life! Drop me a message and I’ll respond as soon as possible."
                </p>
            </div>

            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                className={`
                    px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg text-white bg-[#00000075] border border-white text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black mb-5 sm:mb-6
                    transition-all duration-1000 ease-out delay-400
                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}>
                Let's Talk
            </a>

            <div
                className={`
                    contact-social flex gap-4 sm:gap-6 md:gap-8 justify-center mt-4 sm:mt-6
                    transition-all duration-1000 ease-out delay-600
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}>
                <Social />
            </div>
        </div>
    );
}
