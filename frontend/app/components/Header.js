
'use client';
import React, { useState } from "react";
import '../globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100  shadow-md p-3">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-3xl font-bold mt-4 mr-3 text-green-600">
          <a href="#">Farmily</a>
        </div>

        {/* Mobile Menu Toggler */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-gray-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6 text-green-600" />
        </button>

        {/* Navigation Links */}
        <div className={` top-0 ml-14 flex-1 lg:flex items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-0 text-gray-700 font-medium">
           <li><a href="../FacilityPage" className="hover:text-green-600">Facilities</a></li>
            <li><a href="../WebsitePage" className="hover:text-green-600">Contact</a></li>
            <li><a href="../WebsitePage" className="hover:text-green-600">About</a></li>
            <li><a href="../WebsitePage" className="hover:text-green-600">Feedback</a></li>
            <li><a href="../WebsitePage" className="hover:text-green-600">Register</a></li>
          </ul>

          {/* Search Form */}
          <form className="flex items-center gap-2 mt-4 lg:mt-0">
            <input 
              type="search" 
              placeholder="Search" 
              className="px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-green-600"
              aria-label="Search"
            />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

// // 
// 'use client';
// import React, { useState } from "react";
// import '../globals.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-gray-100 shadow-md p-3">
//       <nav className="container mx-auto flex items-center justify-between">
//         {/* Brand Name */}
//         <div className="text-3xl font-bold mt-4 mr-3 text-green-600">
//           <a href="#">Farmily</a>
//         </div>

//         {/* Mobile Menu Toggler */}
//         <button 
//           onClick={() => setIsMenuOpen(!isMenuOpen)} 
//           className="lg:hidden text-gray-600 focus:outline-none"
//         >
//           <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6 text-green-600" />
//         </button>

//         {/* Navigation Links */}
//         <div className={` ml-14 flex-1 lg:flex items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
//           <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-0 text-gray-700 font-medium">
//             <li><a href="../WebsitePage" className="hover:text-green-600">Home</a></li>
//             <li><a href="../FacilityPage" className="hover:text-green-600">Facility</a></li>
//             <li><a href="../WebsitePage" className="hover:text-green-600">Contact</a></li>
//             <li><a href="../WebsitePage" className="hover:text-green-600">About</a></li>
//             <li><a href="../WebsitePage" className="hover:text-green-600">Feedback</a></li>
//             <li><a href="../WebsitePage" className="hover:text-green-600">Register</a></li>
//           </ul>

//           {/* Search Form */}
//           <form className="flex items-center gap-2 mt-4 lg:mt-0">
//             <input 
//               type="search" 
//               placeholder="Search" 
//               className="px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-green-600"
//               aria-label="Search"
//             />
//             <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
//               Search
//             </button>
//           </form>
//         </div>
//       </nav>
//     </header>
//   );
// }





