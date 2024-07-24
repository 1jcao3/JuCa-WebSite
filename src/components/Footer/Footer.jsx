
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-2  text-white ">
      <div className="container mx-auto md:px-16 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold">JuCa</h1>
            <p className="mt-2">Improving knowledge through innovative solutions.</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#services" className="hover:text-gray-400">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="flex space-x-4 items-center justify-center mb-4 md:mb-0">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <IoLogoInstagram size={28} />
            </a>
            <a href="https://whatsapp.com" className="hover:text-gray-400">
              <IoLogoWhatsapp size={24} />
            </a>
          </div>
          <div className="text-center md:text-right">
            <span className="block mb-2 md:mb-0"><a href="mailto:juliankamilo6@gmail.com" className="hover:text-gray-400">juliankamilo6@gmail.com</a></span>
            <p className="text-gray-400">&copy; 2024 JuCa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
