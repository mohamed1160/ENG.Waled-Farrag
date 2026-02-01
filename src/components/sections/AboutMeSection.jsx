export default function AboutSection() {
    return (
        <section className="w-full h-[120vh] bg-black text-white pt-20 px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-start md:items-start gap-10">
                
                <div className="order-1 md:order-2 w-full md:flex-1 h-[60vh] md:h-[80vh] bg-gray-400 rounded-lg">
                    {/* <img src="" alt="" /> */}
                </div>

                
                <div className="order-2 md:order-1 flex-1 flex flex-col sm:justify-between min-h-[80vh]">
                    <div>
                        <h2 className="sm:text-[48px] text-[26px] font-semibold mb-4">About me</h2>
                        <p className="font-light text-[var(--secondary-1)] sm:text-[24px] text-[16px] mb-6">
                            I'm a brand designer who believes that strong design starts long before the visuals. My work is driven by strategy—understanding the brand's core, its audience, and the
                            experience it aims to create.
                        </p>
                    </div>
                    <button className=" flex items-center justify-center sm:w-[200px] sm:h-[77px] sm:text-[20px] w-[180px] h-[50px] text-[16px] font-medium rounded-xs border border-[#F2F2F23F] px-3 py-6 hover:bg-white hover:text-black transition md:mt-0">
                        Get the full CV
                    </button>
                </div>
            </div>
        </section>
    );
}
