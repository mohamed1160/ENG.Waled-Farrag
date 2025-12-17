import ContactBtn from "./UI/ContactBtn";
import Logo from "../assets/images/mainLogo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
  return (
      <header>
          <nav className="flex items-center fixed top-0 left-0 z-10 h-[119px] w-full justify-between pt-6 pb-6 pr-16 pl-16 border-b border-[#F2F2F23F]">
              <div className="logo h-full w-20 ">
                  <img src={Logo} alt="logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex items-center gap-10">
                  <ul className="flex items-center gap-[35px] ">
                      <li>
                          <Link to={"/"} className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">Home</Link>
                      </li>
                      <li>
                          <Link className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">About</Link>
                      </li>
                      <li>
                          <Link
                              to={"/work"}
                              className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">
                              Work
                          </Link>
                      </li>
                      <li>
                          <Link className="hover-underline text-[1.1rem] p-2.5 hover:text-[#A1A1A1]  transition-all duration-[0.4s]">Contact</Link>
                      </li>
                  </ul>
                  <ContactBtn />
              </div>
          </nav>
      </header>
  );
}
