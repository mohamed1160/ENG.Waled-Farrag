import CraftWithMeSection from "../components/sections/CraftWithMeSection";
import Swiper from "../components/UI/Swiper";


export default function WorkPage() {
    return (
        <main>
            <section className="w-full mb-[80px] mt-[200px] pr-16 pl-16">
                <div className="title flex flex-col gap-8 w-full">
                    <h2 className="text-[24px] font-light pt-4 pb-4 pr-6 pl-6 border m-0 w-fit border-[#F2F2F23F] rounded-sm">Work</h2>
                    <p className="text-[42px] font-light w-[70%]">Purpose-driven design that builds identity, structure, experience, and clarity.</p>
                </div>
                <div className="mt-[56px]">
                    <ul className="flex items-center gap-[16px] border-b border-[#F2F2F23F] ">
                        <li>
                            <button className="hover-underline text-[18px] hover:font-semibold hover:text-[#A1A1A1] p-[10px] transition-all duration-[0.6s]">All</button>
                        </li>
                        <li>
                            <button className="hover-underline text-[18px] hover:font-semibold hover:text-[#A1A1A1] p-[10px] transition-all duration-[0.6s]">Branding</button>
                        </li>
                        <li>
                            <button className="hover-underline text-[18px] hover:font-semibold hover:text-[#A1A1A1] p-[10px] transition-all duration-[0.6s]">Layout Design</button>
                        </li>
                        <li>
                            <button className="hover-underline text-[18px] hover:font-semibold hover:text-[#A1A1A1] p-[10px] transition-all duration-[0.6s]">Packaging Design</button>
                        </li>
                        <li>
                            <button className="hover-underline text-[18px] hover:font-semibold hover:text-[#A1A1A1] p-[10px] transition-all duration-[0.6s]">Wayfinding System</button>
                        </li>
                    </ul>
                    <div className="mt-5">
                        <div className="grid grid-cols-2 gap-6 w-full ">
                            {/* div1 */}

                            <div className="  w-full text-white">
                                <div className="bg-[var(--secondary-2)] rounded-[8px] w-full h-[80vh]"></div>
                                <div className=" w-full flex flex-col gap-2 mt-4">
                                    <h3 className="font-semibold text-[20px]">Project Name</h3>
                                    <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                                    <div className="mt-4">
                                        <ul className="grid grid-cols-7 gap-4 ">
                                            <li className="text-[16px] font-medium pt-2 pb-2 pl-0 pr-0 bg-[var(--secondary-2)] flex items-center justify-center">Text</li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* div2 */}
                            <div className="w-full text-white mt-[25%] ">
                                <div className="bg-[var(--secondary-2)] rounded-[8px] w-full h-[80vh]"></div>
                                <div className=" w-full flex flex-col gap-2 mt-4">
                                    <h3 className="font-semibold text-[20px]">Project Name</h3>
                                    <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                                    <div className="mt-4">
                                        <ul className="grid grid-cols-7 gap-4 ">
                                            <li className="text-[16px] font-medium pt-2 pb-2 pl-0 pr-0 bg-[var(--secondary-2)] flex items-center justify-center">Text</li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* div1 */}

                            <div className="  w-full text-white">
                                <div className="bg-[var(--secondary-2)] rounded-[8px] w-full h-[80vh]"></div>
                                <div className=" w-full flex flex-col gap-2 mt-4">
                                    <h3 className="font-semibold text-[20px]">Project Name</h3>
                                    <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                                    <div className="mt-4">
                                        <ul className="grid grid-cols-7 gap-4 ">
                                            <li className="text-[16px] font-medium pt-2 pb-2 pl-0 pr-0 bg-[var(--secondary-2)] flex items-center justify-center">Text</li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* div2 */}
                            <div className="w-full text-white mt-[25%] ">
                                <div className="bg-[var(--secondary-2)] rounded-[8px] w-full h-[80vh]"></div>
                                <div className=" w-full flex flex-col gap-2 mt-4">
                                    <h3 className="font-semibold text-[20px]">Project Name</h3>
                                    <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                                    <div className="mt-4">
                                        <ul className="grid grid-cols-7 gap-4 ">
                                            <li className="text-[16px] font-medium pt-2 pb-2 pl-0 pr-0 bg-[var(--secondary-2)] flex items-center justify-center">Text</li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                            <li className="text-[16px] text-[var(--secondary-2)] border border-[var(--secondary-2)] rounded-[60px] font-light pt-2 pb-2 pl-0 pr-0  flex items-center justify-center">
                                                Tag
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full pl-16 pr-16 mt-[80px]">
                <div className="title flex flex-col gap-8 w-full">
                    <h2 className="text-[24px] font-light pt-4 pb-4 pr-6 pl-6 border m-0 w-fit border-[#F2F2F23F] rounded-xs">Stories Built With Clients:</h2>
                    <p className="text-[42px] font-light w-[97%]">Behind every brand I design, there's a client with a story worth shaping. Together, We turn challenges into direction and ideas into identities that reflect Who they are--and Who they're becoming.</p>
                </div>
                <div className="mt-[80px] h-[163px]">
                    {/* Swiper Component */}
                    <Swiper />
                </div>
            </section>
            <CraftWithMeSection />
        </main>
    );
}