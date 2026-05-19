import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navBg = nav ? "bg-white" : "bg-[#A8D3FF]";

  return (
    <header>
      <nav
        className={`wrapper ${navBg} flex justify-between items-center py-4  transition-all duration-500 ease-in-out`}
      >
        <a href="index.html">
          <img src="src\assets\icons\Logo.svg" alt="Aetherfield's logo." />
        </a>

        <ul className="gap-4 hidden md:flex">
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="#">Journal</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Get Started &rarr;</a>
          </li>
        </ul>

        <button
          className="flex md:hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95"
          onClick={() => setNav(!nav)}
        >
          <img
            src={
              nav
                ? "/src/assets/icons/nav-close.svg"
                : "/src/assets/icons/nav-open.svg"
            }
            alt="Hamburger button"
            className="transition-opacity duration-300 ease-in-out"
          />
        </button>
      </nav>

      <div
        className={`wrapper md:hidden w-full overflow-hidden transition-all duration-500 ease-in-out px-[20px] shadow-2xl ${
          nav ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="gap-3 flex flex-col py-4">
          <li>
            <a
              className="text-[24px] leading[1] tracking-[-3] font-medium border-b-1 border-divider pb-3 block"
              href=""
            >
              Product
            </a>
          </li>
          <li>
            <a
              className="text-[24px] leading[1] tracking-[-3] font-medium border-b-1 border-divider pb-3 block"
              href="#"
            >
              Journal
            </a>
          </li>
          <li>
            <a
              className="text-[24px] leading[1] tracking-[-3] font-medium border-b-1 border-divider pb-3 block"
              href=""
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-[24px] leading[1] font-medium border-b-1 border-divider pb-3 block"
              href="#"
            >
              Careers
            </a>
          </li>
          <li className="w-full">
            <a
              className="text-white bg-black text-[20px] py-1.5 font-mono text-center block"
              href="#"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
