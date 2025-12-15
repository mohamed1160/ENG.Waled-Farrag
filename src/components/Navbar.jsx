import ContactBtn from "./UI/ContactBtn";
import Logo from "../assets/images/mainLogo.png";
export default function Navbar() {
  return (
      <header>
          <nav className="flex items-center fixed top-0 left-0 z-10 h-[119px] w-full justify-between pt-6 pb-6 pr-16 pl-16 border-b border-[#F2F2F23F]">
              <div className="logo h-full w-20 ">
                  <img src={Logo} alt="logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center gap-10">
                  <ul className="flex items-center gap-[35px] ">
                      <li>
                          <button className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">Home</button>
                      </li>
                      <li>
                          <button className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">About</button>
                      </li>
                      <li>
                          <button className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">Work</button>
                      </li>
                      <li>
                          <button className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">Contact</button>
                      </li>
                  </ul>
                  <ContactBtn />
              </div>
          </nav>
      </header>
  );
}
