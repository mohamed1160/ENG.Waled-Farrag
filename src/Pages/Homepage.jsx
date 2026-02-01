import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import WorkSection from "../components/sections/WorkSection";
import FlipCards from "../components/UI/FlipCards";
import CraftWithMeSection from "../components/sections/CraftWithMeSection";
import AboutSection from "../components/sections/AboutMeSection";
import WorkSwiper from "../components/sections/WorkSwiper";
import Contact from "../components/sections/ContactsInfo";

export default function Homepage() {
    return (
        <main className="w-full ">
            {/* About (Mobile only) */}
            <div className="block md:hidden">
                <AboutSection />
            </div>

            <HeroSection />
            <IntroSection />

            {/* FlipCards (Mobile - Desktop) */}
            <section className="w-full px-6 mt-20 block md:hidden">
                <FlipCards />
            </section>

            {/* Work (Mobile) */}
            <div className="block md:hidden">
                <WorkSwiper />
            </div>

            {/* Work (Desktop) */}
            <div className="hidden md:block">
                <WorkSection />
            </div>


            <section className="w-full mt-30 px-16 hidden md:block">
                <FlipCards />
            </section>

            <CraftWithMeSection />
            <div className="block md:hidden">
                <Contact />
            </div>
        </main>
    );
}
