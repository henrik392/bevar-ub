import Image from "next/image";
// import email icon from react icons
import { FaEnvelope } from "react-icons/fa";
// Import filled facebook and instagram icons from react icons
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center h-16 bg-wh-endite place responsive-padding place-content-between">
      <div className="flex flex-row items-center w-48">
        <FaEnvelope className="w-5 h-5 mr-2" />
        <p>bevarub@gmail.com</p>
      </div>

      <div className="items-center hidden md:flex">
        <Image
          src="/LogoSvart.svg"
          alt="Logo"
          width="26"
          height="26"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-row items-center w-48 place-content-end">
        <a href="https://www.facebook.com/profile.php?id=100077042215837">
          <FaFacebookF className="w-5 h-5 mr-2" />
        </a>

        <a href="https://www.instagram.com/bevar.ub/">
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
