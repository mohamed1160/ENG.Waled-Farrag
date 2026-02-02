export default function AboutSection() {
    return (
        <section id="about" className="w-full bg-black text-white pt-20 px-6 md:mt-10 md:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-10">
                {/* Image */}
                <div
                    className="
                        order-1 md:order-2
                        w-full md:w-1/2 lg:flex-1
                        bg-gray-400 rounded-lg
                        min-h-[50vh] md:min-h-[55vh] lg:min-h-[80vh]
                    "
                />

                {/* Content */}
                <div
                    className="
                        order-2 md:order-1
                        w-full md:w-1/2 lg:flex-1
                        flex flex-col
                        md:justify-between
                    ">
                    <div>
                        <h2 className="text-[26px] md:text-[32px] lg:text-[48px] font-semibold mb-4">About me</h2>

                        <p className="font-light text-[var(--secondary-1)] text-[16px] md:text-[18px] lg:text-[24px] mb-6">
                            I'm a brand designer who believes that strong design starts long before the visuals. My work is driven by strategy—understanding the brand's core, its audience, and the
                            experience it aims to create.
                        </p>
                    </div>

                    <button
                        className="
                            flex items-center justify-center
                            w-[150px] sm:w-[180px] md:w-[170px] lg:w-[200px]
                            h-[50px] md:h-[48px] lg:h-[77px]
                            text-[16px] lg:text-[20px]
                            font-medium rounded-xs
                            border border-[#F2F2F23F]
                            px-3 py-6
                            hover:bg-white hover:text-black transition
                        ">
                        Get the full CV
                    </button>
                </div>
            </div>
        </section>
    );
}
