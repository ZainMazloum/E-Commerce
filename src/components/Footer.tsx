import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-6 text-center">
      <a
        href="#"
        className="text-lg font-semibold tracking-wide text-indigo-400 hover:text-indigo-300 transition"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Zain Mazloum
      </a>

      <ul
        className="flex flex-wrap justify-center gap-4 mt-4 text-xs font-medium"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <li>
          <a href="#" className="hover:text-indigo-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-indigo-400 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-indigo-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </li>
      </ul>

      <div
        className="flex justify-center gap-4 mt-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <a
          href="https://www.facebook.com/zein.mazlom"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 transition text-sm"
        >
          <FaFacebookF />
        </a>
        <a
          href="mailto:zanemazlom@gmail.com"
          aria-label="Email"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 transition text-sm"
        >
          <MdOutlineAttachEmail />
        </a>
        <a
          href="https://github.com/ZainMazloum"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 transition text-sm"
        >
          <FiGithub />
        </a>
      </div>

      <div className="mt-4 text-gray-400 text-xs">
        <p>&copy; Zain Mazloum — All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
