// import React, { useState } from "react";
// import {
//   BoltIcon,
//   Bars3BottomRightIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/solid";
// import { Link, NavLink } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="flex justify-center justify-between">
//       <div>
//         <Link to="/" className="flex justify-center">
//           <BoltIcon className="h-6 w-6 text-blue-500" />
//           <span className="ml-2 text-xl font-bold tracking-wide">
//             Book Shop
//           </span>
//         </Link>
//       </div>
//       <div className="menu-container">
//         <ul className="items-center space-x-8 hidden lg:flex">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) => (isActive ? "active" : "default")}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/books"
//               className={({ isActive }) => (isActive ? "active" : "default")}
//             >
//               Books
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               title="This is about menu"
//               className={({ isActive }) => (isActive ? "active" : "default")}
//             >
//               About
//             </NavLink>
//           </li>
//         </ul>
//         {/* Mobile navbar */}
//         <div className="lg:hidden">
//           <button aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
//             <Bars3BottomRightIcon className="h-6 w-6"></Bars3BottomRightIcon>
//           </button>
//           {isMenuOpen && (
//             <div className="absolute top-0 left-0 w-full z-10">
//               <div className="p-5 bg-white border rounded shadow-sm">
//                 {/* Logo & Button section */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <Link to="/" className="inline-flex items-center">
//                       <BoltIcon className="h-6 w-6 text-blue-500" />
//                       <span className="ml-2 text-xl font-bold tracking-wide">
//                         Book Shop
//                       </span>
//                     </Link>
//                   </div>
//                   {/* Dropdown menu close button */}
//                   <div>
//                     <button
//                       aria-label="Close Menu"
//                       title="Close Menu"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <XMarkIcon className="w-5 text-gray-600" />
//                     </button>
//                   </div>
//                 </div>
//                 {/* Mobile Nav Items Section */}
//                 <nav>
//                   <ul className="space-y-4">
//                     <li>
//                       <Link to="/" className="default">
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/books"
//                         className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
//                       >
//                         Books
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/about"
//                         className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
//                       >
//                         About Us
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/books", label: "Books" },
    { path: "/about", label: "About" },
  ];

  return (
    <div className="flex justify-between">
      <div className="logo">
        <Link to="/" className="flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-600" />
          <span className="ml-2">Book Shop</span>
        </Link>
      </div>
      <div className="lg:flex">
        <ul className="hidden lg:flex items-center menu-container">
          {/* <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Abou
          </NavLink> */}
          {menuItems.map((item) => (
            <li>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <Bars3BottomRightIcon className="h-6 w-6"></Bars3BottomRightIcon>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span>Book Shop</span>
                    </Link>
                  </div>
                  <div>
                    <button
                      // aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul>
                    {menuItems.map((item) => (
                      <li>
                        <Link to={item.path}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
