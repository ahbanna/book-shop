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

//   const menuItems = [
//     { path: "/", label: "Home" },
//     { path: "/books", label: "Books" },
//     { path: "/about", label: "About", title: "This is about menu" },
//   ];

//   return (
//     <div className="flex justify-between">
//       <div>
//         <Link to="/" className="flex items-center">
//           <BoltIcon className="h-6 w-6 text-blue-500" />
//           <span className="ml-2 text-xl font-bold tracking-wide">
//             Book Shop
//           </span>
//         </Link>
//       </div>
//       <div className="lg:flex">
//         <ul className="hidden lg:flex items-center space-x-8">
//           {menuItems.map((item) => (
//             <li key={item.path}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) => (isActive ? "active" : "default")}
//                 title={item.title}
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//         <div className="lg:hidden">
//           <button aria-label="Open menu" onClick={() => setIsMenuOpen(true)}>
//             <Bars3BottomRightIcon className="h-6 w-6"></Bars3BottomRightIcon>
//           </button>
//           {isMenuOpen && (
//             <div className="absolute top-0 left-0 w-full z-10">
//               <div className="p-5 bg-white border rounded shadow-sm">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <Link to="/" className="inline-flex items-center">
//                       <BoltIcon className="h-6 w-6 text-blue-500" />
//                       <span className="ml-2 text-xl font-bold tracking-wide">
//                         Book Shop
//                       </span>
//                     </Link>
//                   </div>
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
//                 <nav>
//                   <ul className="space-y-4">
//                     {menuItems.map((item) => (
//                       <li key={item.path}>
//                         <Link
//                           to={item.path}
//                           className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
//                         >
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
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
