"use client";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import {
  FaBehance,
  // FaBehanceSquare,
  FaLinkedin,
  // FaLinkedinIn,
} from "react-icons/fa";
// import { FaLinkedin } from 'react-icons/fa6';
import { RiCloseFill } from "react-icons/ri";

// Define the type for navigation links for better type safety
interface NavLink {
  name: string;
  href: string;
}

const NavTest: React.FC = () => {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Array of navigation links
  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/work" },
    { name: "Team", href: "/aboutUs" },
    { name: "Contact", href: "/contactUs" },
    { name: "Get a Quote", href: "/quote" },
  ];

  // Inline SVG for the Menu (Hamburger) icon
  //   const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       {...props}
  //     >
  //       <line x1="4" y1="12" x2="20" y2="12"></line>
  //       <line x1="4" y1="6" x2="20" y2="6"></line>
  //       <line x1="4" y1="18" x2="20" y2="18"></line>
  //     </svg>
  //   );

  // Inline SVG for the Close (X) icon
  //   const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       {...props}
  //     >
  //       <line x1="18" y1="6" x2="6" y2="18"></line>
  //       <line x1="6" y1="6" x2="18" y2="18"></line>
  //     </svg>
  //   );

  return (
    <>
      {/* <nav className="sticky top-0 z-50 bg-slate-200 opacity-[94%] shadow-md border-b-2 border-gray-500"> */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between  bg-transparent shadow-md  border-gray-500"> */}
<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/35 backdrop-blur-sm shadow-lg ">        {/*
        Sticky Navbar:
        - `sticky top-0`: Makes the navbar stick to the top of the viewport when scrolling.
        - `z-50`: Ensures the navbar stays on top of other content.
        - `bg-white shadow-md`: White background with a subtle shadow.
      */}
        <div className=" w-full mx-auto px-2 md:px-3 lg:px-6  py-0.5 flex justify-between items-center ">
          <div>
            {/* Logo/Brand Section */}
            {/* <Link
              href="/"
              className="text-2xl font-bold text-gray-800 rounded-md p-2"
            >
              {siteConfig.name}
            </Link> */}
            <Link href="/">
            <Image
            src={'/icons/logo.png'}
            alt="logo"
            width={110}
            height={20}
            className=""
            />
            </Link>
          </div>

          {/*
            Desktop Navigation Links:
            - `hidden md:flex`: Hides on small screens, displays as a flex container on medium screens and up.
            - `space-x-6`: Adds horizontal space between links.
          */}
          <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  link.href != "/quote"
                  ? " text-gray-700 text-sm lg:text-base hover:text-blue-600 transition-colors duration-300 rounded-md py-2 px-3"
                  : "my-button flex items-center cursor-pointer  bg-teal-500 hover:bg-teal-400 text-white h-9 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105"
                 
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 ">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.ceo.ceoLinks.behance}
              className="FootIcon"
            >
              <FaBehance size={18} />
              <span className="sr-only">behance</span>
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.linkedIn}
              className="FootIcon"
            >
              <FaLinkedin size={18} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/*
            Mobile Menu Toggle Button (Hamburger/Close Icon):
            - `md:hidden`: Only visible on small screens.
          */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the mobile menu state
            //   className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            className="text-gray-600 hover:text-blue-600  p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Accessibility improvement
          >
            {/* Renders XIcon when menu is open, MenuIcon when closed */}
            {isMenuOpen ? (
              <RiCloseFill
                className="border-2 rounded-md border-blue-500 h-7 w-7"
                size={24}
              />
            ) : (
              <CiMenuFries
                className="border-2 rounded-md border-blue-500 h-7 w-7 p-1"
                size={24}
              />
            )}
          </button>
        </div>

        {/*
          Mobile Sheet Menu:
          - `md:hidden`: Only visible on small screens.
          - `absolute w-full`: Takes full width and positioned absolutely relative to the `nav` parent.
          - `bg-white shadow-lg`: White background with a larger shadow.
          - `transition-transform duration-300 ease-in-out`: Adds a smooth sliding transition.
          - Conditional classes for sliding effect:
            - `translate-y-0 opacity-100 pointer-events-auto`: Menu is visible and fully opaque, and interactive.
            - `-translate-y-full opacity-0 pointer-events-none`: Menu is hidden by moving it up by its full height, making it transparent, and non-interactive.
        */}
        <div
          className={`md:hidden absolute  w-[70%] right-0 top-[2.8rem] border-2 border-gray-500 bg-yellow-50 shadow-lg rounded-b-lg transition-transform duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg py-2 w-full text-center rounded-md hover:bg-gray-50"
               className={` text-lg text-center  ${
                  link.href != "/quote"
                  ? " text-gray-700  hover:text-blue-600 transition-all duration-300 rounded-md py-2 px-3 w-full  text-center hover:bg-gray-50"
                  // : " flex items-center cursor-pointer border-2 border-teal-800 bg-teal-500 hover:bg-teal-400 text-white h-9 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 "
                  // : "flex items-center cursor-pointer border-2 border-teal-800 bg-teal-500 hover:bg-teal-400 text-white h-9 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 animate-jump"
                  : "my-button"
                } ` }
                onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavTest;

// <div className="min-h-screen bg-gray-100 font-['Inter']">
//       {/*
//         Sticky Navbar:
//         - `sticky top-0`: Makes the navbar stick to the top of the viewport when scrolling.
//         - `z-50`: Ensures the navbar stays on top of other content.
//         - `bg-white shadow-md`: White background with a subtle shadow.
//       */}
//       <nav className="sticky top-0 z-50 bg-white shadow-md rounded-b-lg">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           {/* Logo/Brand Section */}
//           <a href="#" className="text-2xl font-bold text-gray-800 rounded-md p-2">
//             MyBrand
//           </a>

//           {/*
//             Desktop Navigation Links:
//             - `hidden md:flex`: Hides on small screens, displays as a flex container on medium screens and up.
//             - `space-x-6`: Adds horizontal space between links.
//           */}
//           <div className="hidden md:flex space-x-6">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-600 hover:text-blue-600 transition-colors duration-300 rounded-md py-2 px-3"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/*
//             Mobile Menu Toggle Button (Hamburger/Close Icon):
//             - `md:hidden`: Only visible on small screens.
//           */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the mobile menu state
//               className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
//               aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Accessibility improvement
//             >
//               {/* Renders XIcon when menu is open, MenuIcon when closed */}
//               {isMenuOpen ? <RiCloseFill  size={24} /> : <CiMenuFries  size={24} />}
//             </button>
//           </div>
//         </div>

//         {/*
//           Mobile Sheet Menu:
//           - `md:hidden`: Only visible on small screens.
//           - `absolute w-full`: Takes full width and positioned absolutely relative to the `nav` parent.
//           - `bg-white shadow-lg`: White background with a larger shadow.
//           - `transition-transform duration-300 ease-in-out`: Adds a smooth sliding transition.
//           - Conditional classes for sliding effect:
//             - `translate-y-0 opacity-100 pointer-events-auto`: Menu is visible and fully opaque, and interactive.
//             - `-translate-y-full opacity-0 pointer-events-none`: Menu is hidden by moving it up by its full height, making it transparent, and non-interactive.
//         */}
//         <div
//           className={`md:hidden absolute w-full bg-white shadow-lg rounded-b-lg transition-transform duration-300 ease-in-out ${
//             isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
//           }`}
//         >
//           <div className="flex flex-col items-center py-4 space-y-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg py-2 w-full text-center rounded-md hover:bg-gray-50"
//                 onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/*
//         Main Content Area:
//         - Added dummy content to demonstrate the sticky behavior of the navbar.
//         - `container mx-auto px-4 py-8`: Centers content and adds padding.
//       */}

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to My Website</h1>
//         <p className="text-gray-700 leading-relaxed mb-4">
//           This is a demonstration of a responsive, sticky navbar with a mobile sheet menu built using React, TypeScript, and Tailwind CSS.
//           Scroll down to see the sticky effect in action. The menu slides down smoothly on mobile.
//         </p>
//         {/* Generate some dummy paragraphs to ensure the page is scrollable */}
//         {[...Array(20)].map((_, i) => (
//           <p key={i} className="text-gray-700 leading-relaxed mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         ))}
//       </main>
//     </div>
