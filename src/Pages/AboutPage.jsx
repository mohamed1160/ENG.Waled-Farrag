import React from "react";
import { motion } from "framer-motion"; 
import AboutSection from "../components/sections/AboutMeSection";
import Swiper from "../components/UI/Swiper";
import CraftWithMeSection from "../components/sections/CraftWithMeSection";
import StoriesSection from "../components/sections/StoriesSection";
import OurMissionSection from "../components/sections/OurMissionSection";

export default function AboutPage() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="w-full mt-12 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
                <AboutSection />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    ...sectionVariants,
                    visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.2 } },
                }}>
                <OurMissionSection />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    ...sectionVariants,
                    visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.4 } },
                }}>
                <StoriesSection />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    ...sectionVariants,
                    visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.6 } },
                }}>
                <CraftWithMeSection />
            </motion.div>
        </div>
    );
}
