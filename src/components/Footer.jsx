import logo from "../assets/images/darkLogo.png";
import MailInput from "./UI/MailInput";
import Social from "./UI/Social";

export default function Footer() {
    

    return (
        <footer className="w-full bg-white px-20 py-24">
            <div className="max-w-[1400px] mx-auto flex justify-between items-start">
                {/* Left Block */}
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 items-start">
                        <img src={logo} className="w-[70px] h-[70px] object-contain" alt="Farrag logo" />

                        <div>
                            <p className="text-black text-[22px] font-light">Creative solution,</p>
                            <p className="text-black text-[26px] font-bold">Real Impact</p>
                        </div>
                    </div>

                    <ul className="flex flex-col gap-2">
                       
                            <li >
                                <button className="text-black text-[15px] hover:text-gray-500 transition">Home</button>
                            </li>
                            <li >
                                <button className="text-black text-[15px] hover:text-gray-500 transition">About</button>
                            </li>
                            <li >
                                <button className="text-black text-[15px] hover:text-gray-500 transition">Work</button>
                            </li>
                            <li >
                                <button className="text-black text-[15px] hover:text-gray-500 transition">Contact</button>
                            </li>
                        
                    </ul>
                </div>

                {/* Right Block */}
                <div className="flex flex-col gap-6 items-start">
                    <h3 className="text-[18px] font-semibold text-black">Get in touch</h3>

                    <MailInput />

                    <Social />

                    {/* Bottom text INSIDE right block */}
                    <div className="flex gap-4 items-center  text-[12px] text-gray-600 pt-4">
                        <p>All Rights are reserved</p>
                        <p>Privacy & Policy</p>
                        <p className=" text-[20px] font-semibold text-black">FARRAG ©</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
