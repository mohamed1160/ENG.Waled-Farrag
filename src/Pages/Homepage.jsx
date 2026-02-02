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
            {/* About (Mobile + Tablet) */}
            <div className="block lg:hidden mb-8">
                <AboutSection />
            </div>

            {/* Hero (Desktop only) */}
            <div className="hidden lg:block mb-16">
                <HeroSection />
            </div>

            {/* Intro (Desktop only) */}
            <div className="hidden lg:block mb-16">
                <IntroSection />
            </div>

            {/* FlipCards (Mobile + Tablet) */}
            <section className="block lg:hidden w-full px-6 mb-8">
                <FlipCards />
            </section>

            {/* Work (Mobile + Tablet) */}
            <div className="block lg:hidden mb-8">
                <WorkSwiper />
            </div>

            {/* Work (Desktop) */}
            <div className="hidden lg:block mb-16">
                <WorkSection />
            </div>

            {/* FlipCards (Desktop) */}
            <section className="hidden lg:block w-full px-16 mb-16">
                <FlipCards />
            </section>

            {/* Craft With Me (All screens) */}
            <div className="mb-8">
                <CraftWithMeSection />
            </div>

            {/* Contact (Mobile + Tablet) */}
            <div className="block lg:hidden mb-8">
                <Contact />
            </div>
        </main>
    );
}
