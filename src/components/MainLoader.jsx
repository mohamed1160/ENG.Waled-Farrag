import React, { useState, useEffect } from "react";

const words = ["Create...", "Inspire...", "Launch..", "Deliver..."]; 

export default function MainLoader() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex +1) % words.length);
        }, 1500); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            {" "}
            <div className="text-center">
                <div className="text-white text-2xl md:text-4xl font-light animate-pulse">{words[currentWordIndex]}</div>
                <div className="mt-4 w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
        </div>
    );
}
