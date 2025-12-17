import heroBanner from "../assets/images/heroBanner.png";
import copyright from "../assets/images/copyright.png";
import workPreviewBanner from "../assets/images/workPreviewBanner.png";
import FlipCards from "../components/UI/FlipCards";
import CraftWithMe from "../components/UI/CraftWithMe";
import CraftWithMeSection from "../components/CraftWithMeSection";

export default function Homepage() {
    return (
        <main className="w-full">
            {/* Hero Banner */}
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center pr-16 pl-16">
                <img src={heroBanner} className="absolute inset-0 w-full h-full object-cover object-center z-0" alt="Hero Banner" />
                <div className="relative flex flex-col  z-9 w-full h-full">
                    <div className="text-white flex flex-col  absolute text-4xl font-bold left-0 bottom-[65px] px-4">
                        <img src={copyright} className="w-[201px] h-[74px] object-cover" alt="" />
                    </div>
                </div>
            </section>
            {/* Intro Section */}
            <section className="w-full h-screen flex flex-col gap-20 pr-16 pl-16 mt-20">
                <h2 className="text-[36px] font-light w-[85%]">
                    I help businesses build meaningful brands through strategic thinking and intentional design. Blending strategy with creativity to craft identities that speak, guide, and inspire.
                </h2>
                <div className="w-full h-[697px] relative overflow-hidden flex items-center justify-center">
                    <img src={workPreviewBanner} alt="" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
                    <div className="relative flex items-center justify-center z-9 w-full h-full">
                        <div className="text-white flex  absolute ">
                            <h3 className="text-[40px] font-normal">
                                Strategic Minds Create <span className="font-bold">Stronger Brands</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* Work Section */}
            <section className="w-full  mt-20 pr-16 pl-16">
                <div className="title flex flex-col gap-8 w-full">
                    <h2 className="text-[24px] font-light pt-4 pb-4 pr-6 pl-6 border m-0 w-fit border-[#F2F2F23F] rounded-xs">Selected Work</h2>
                    <p className="text-[42px] font-light">
                        Crafting Meaningful Brands <span className="font-medium">with Strategic Vision</span>
                    </p>
                </div>
                <div className="grid mb-[36px] mt-8 grid-cols-4 gap-6 w-full ">
                    <div className="col-start-1 col-end-2 ">
                        <div className="w-full flex flex-col gap-4">
                            <div className="bg-[var(--secondary-2)] w-full min-h-[360px] rounded-[8px]"></div>
                            <div className=" w-full flex flex-col gap-2">
                                <h3 className="font-semibold text-[20px]">Project Name</h3>
                                <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                                <div>
                                    <ul className="grid grid-cols-3 gap-4">
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

                    <div className="col-start-2 col-end-4 ">
                        <div className="w-full flex flex-col gap-4">
                            <div className="bg-[var(--secondary-2)] w-full min-h-[632px] rounded-[8px]"></div>
                            <div className=" w-full flex flex-col gap-2">
                                <h3 className="font-semibold text-[20px]">Project Name</h3>
                                <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                                <div>
                                    <ul className="grid grid-cols-7 gap-4">
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

                    <div className="col-start-4 col-end-5">
                        <div className="w-full flex flex-col gap-4">
                            <div className="bg-[var(--secondary-2)] w-full min-h-[360px] rounded-[8px]"></div>
                            <div className=" w-full flex flex-col gap-2">
                                <h3 className="font-semibold text-[20px]">Project Name</h3>
                                <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                                <div>
                                    <ul className="grid grid-cols-3 gap-4">
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
                <div className="">
                    <div className="bg-[var(--secondary-2)] w-full h-screen rounded-[8px]"></div>
                    <div className=" w-full flex flex-col gap-2 mt-4">
                        <h3 className="font-semibold text-[20px]">Project Name</h3>
                        <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                        <div>
                            <ul className="grid grid-cols-7 gap-4 mt-2">
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
                <div className="mt-[36px] grid grid-cols-2 gap-6">
                    <div className="">
                        <div className="bg-[var(--secondary-2)] w-full h-[75vh] rounded-[8px]"></div>
                        <div className=" w-full flex flex-col gap-2 mt-4">
                            <h3 className="font-semibold text-[20px]">Project Name</h3>
                            <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                            <div>
                                <ul className="grid grid-cols-7 gap-4 mt-2">
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
                    <div className="">
                        <div className="bg-[var(--secondary-2)] w-full h-[75vh] rounded-[8px]"></div>
                        <div className=" w-full flex flex-col gap-2 mt-4">
                            <h3 className="font-semibold text-[20px]">Project Name</h3>
                            <p className="text-[16px] text-[var(--secondary-2)]">Description Description Description Description </p>
                            <div>
                                <ul className="grid grid-cols-7 gap-4 mt-2">
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
            </section>
            <section className="w-full mt-30 pr-16 pl-16">
                <div className="title flex flex-col gap-8 w-full">
                    <h2 className="text-[24px] font-light pt-4 pb-4 pr-6 pl-6 border m-0 w-fit border-[#F2F2F23F] rounded-xs">What I shape</h2>
                    <p className="text-[42px] font-light w-[70%]">
                        I design with intention, crafting clarity, logic, and emotional resonance <span className="font-medium">across every touchpoint.</span>
                    </p>
                </div>
                {/* <FlipCards /> */}
                <div className="w-full mt-8">
                    <FlipCards />
                </div>
            </section>
            <CraftWithMeSection />
        </main>
    );
}
