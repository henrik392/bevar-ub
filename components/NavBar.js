import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";

const NavElements = () => {
  const navItems = [
    { name: "Hjem", href: "#" },
    { name: "Beskytteren", href: "#description" },
    { name: "Om oss", href: "#om-oss" },
    { name: "Kontakt", href: "mailto:bevarub@gmail.com" },
  ];

  // WindowID state
  const [windowId, setWindowId] = useState("");

  useEffect(() => {
    setWindowId(
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ]
    );
  }, []);

  return navItems.map((item, index) => {
    return (
      <li
        key={index}
        className={`${
          item.href === windowId || (windowId === "" && item.href === "#")
            ? "active"
            : ""
        } nav-item`}
      >
        <a onClick={() => setWindowId(item.href)} href={item.href}>
          {item.name}
        </a>
      </li>
    );
  });
};

const NavBar = () => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  // windowWidth state
  const [windowWidth, setWindowWidth] = useState(1024);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
      setMobileNavigationActive(false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <nav className="flex flex-row w-screen responsive-padding place-content-between">
      <div className="logo">
        <Image
          alt="Bevar UB logo"
          src="/BevarUbLogo.svg"
          width={150}
          height={100}
        />
      </div>
      <div
        className={`${
          mobileNavigationActive || windowWidth > 768 ? "" : "hidden"
        } transition ease-in-out duration-300 absolute flex px-8 py-4 right-9 bg-slate-50 md:bg-transparent rounded-2xl md:p-0 md:top-0 md:right-0 md:relative top-24`}
        id="mobile-menu"
      >
        <ul className="flex flex-col text-right md:text-left h-36 md:h-auto place-content-between md:items-center md:flex-row">
          <NavElements />
        </ul>
      </div>
      <HamburgerMenu
        setMobileNavigationActive={setMobileNavigationActive}
        mobileNavigationActive={mobileNavigationActive}
      />
    </nav>
  );
};

const HamburgerMenu = ({
  setMobileNavigationActive,
  mobileNavigationActive,
}) => {
  return (
    <div className="flex flex-row items-center md:hidden menu-icon">
      <svg
        width={30}
        height={30}
        viewBox="0 0 32 42"
        xmlns="http://www.w3.org/2000/svg"
        onClick={(e) => {
          setMobileNavigationActive(!mobileNavigationActive);
        }}
        className={mobileNavigationActive ? "active" : ""}
      >
        <g transform="matrix(1,0,0,1,-389.5,-264.004)">
          <g id="arrow_left2">
            <g transform="matrix(1,0,0,1,0,5)">
              <path
                id="top"
                d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
              />
            </g>
            <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
              <path
                id="bottom"
                d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
              />
            </g>
            <path id="middle" d="M390,284.967L420,284.967" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default NavBar;
