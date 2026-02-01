export default function AboutSection() {
    return (
        <section className="w-full bg-black text-white py-16 px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-start md:items-start gap-10">
                
                <div className="order-1 md:order-2 w-full md:flex-1 h-[60vh] md:h-[80vh] bg-gray-400 rounded-lg">
                    {/* <img src="" alt="" /> */}
                </div>

                
                <div className="order-2 md:order-1 flex-1 flex flex-col justify-between min-h-[80vh]">
                    <div>
                        <h2 className="text-[48px] font-semibold mb-4">About me</h2>
                        <p className="font-medium text-[var(--secondary-2)] text-[24px] mb-6">
                            I'm a brand designer who believes that strong design starts long before the visuals. My work is driven by strategy—understanding the brand's core, its audience, and the
                            experience it aims to create.
                        </p>
                    </div>
                    <button className="w-[200px] h-[77px] text-[20px] font-medium rounded-xs border border-[#F2F2F23F] px-3 py-6 hover:bg-white hover:text-black transition mt-6 md:mt-0">
                        Get the full CV
                    </button>
                </div>
            </div>
        </section>
    );
}
