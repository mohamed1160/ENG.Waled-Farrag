import AboutSection from "../components/sections/AboutMeSection";
import Contact from "../components/sections/ContactsInfo";
import CraftWithMeSection from "../components/sections/CraftWithMeSection";
import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import WorkSection from "../components/sections/WorkSection";
import WorkSwiper from "../components/sections/WorkSwiper";
import FlipCards from "../components/UI/FlipCards";

export default function Homepage() {
    return (
        <main className="w-full">
            {/* About (Mobile only) */}
            <div className="block md:hidden mb-8">
                {" "}
                {/* 32px = 8 * 4px */}
                <AboutSection />
            </div>

            <div className="mb-16 md:mb-16">
                {" "}
                {/* 32px موبايل / 64px ديسكتوب */}
                <HeroSection />
            </div>

            <div className="mb-16 md:mb-16">
                <IntroSection />
            </div>

            {/* FlipCards (Mobile - Desktop) */}
            <section className="w-full px-6 mb-8 md:hidden">
                <FlipCards />
            </section>

            {/* Work (Mobile) */}
            <div className="block md:hidden mb-8">
                <WorkSwiper />
            </div>

            {/* Work (Desktop) */}
            <div className="hidden md:block mb-16">
                <WorkSection />
            </div>

            <section className="w-full mt-30 px-16 hidden md:block mb-16">
                <FlipCards />
            </section>

            <div className="mb-8">
                <CraftWithMeSection />
            </div>

            <div className="block md:hidden mb-8">
                <Contact />
            </div>
        </main>
    );
}
