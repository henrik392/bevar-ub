import Image from "next/image";
import Link from "next/link";

import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center h-24 bg-white responsive-padding place-content-center">
      <div className="flex flex-row items-center w-full mb-2 place-content-between">
        <div className="flex flex-row items-center w-48">
          <FaEnvelope className="w-5 h-5 mr-2" />
          <a href="mailto:bevarub@gmail.com">
            <p>bevarub@gmail.com</p>
          </a>
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
          <Link href="/salgsvilkar" as="/salgsvilkår">
            <a className="underline flex-end text-primary-800">Salgsvilkår</a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center w-full place-content-between">
        <div className="flex flex-row items-center w-48">
          <a href="https://www.facebook.com/profile.php?id=100077042215837">
            <FaFacebookF className="w-5 h-5 mr-2" />
          </a>

          <a href="https://www.instagram.com/bevar.ub/">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
        <p className="items-center hidden md:flex">© Bevar UB 2022</p>
        <p className="flex flex-row items-center w-48 place-content-end">
          Org: 928 104 419
        </p>
      </div>
    </footer>
  );
};

export default Footer;
