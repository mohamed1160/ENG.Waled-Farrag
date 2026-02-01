import workPreviewBanner from "../../assets/images/workPreviewBanner.png";

export default function IntroSection() {
    return (
        <section className="w-full flex flex-col gap-12 sm:gap-16 px-4 sm:px-8 md:px-16 mt-20">
            {/* Main Text */}
            <h2 className="text-xl sm:text-2xl md:text-[36px] font-light w-full sm:w-[90%] md:w-[85%]">
                I help businesses build meaningful brands through strategic thinking and intentional design. Blending strategy with creativity to craft identities that speak, guide, and inspire.
            </h2>

            {/* Image Section */}
            <div className="w-full h-[400px] sm:h-[500px] md:h-[697px] relative overflow-hidden flex items-center justify-center">
                <img src={workPreviewBanner} className="absolute inset-0 w-full h-full object-cover z-0" alt="Work Preview" />

                <h3 className="relative z-10 text-white text-xl sm:text-3xl md:text-[40px] font-normal text-center px-4">
                    Strategic Minds Create <span className="font-bold">Stronger Brands</span>
                </h3>
            </div>
        </section>
    );
}
