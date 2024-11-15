// 'use client'
// import React, { useEffect } from 'react';
// // import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../globals.css';

// export default function Header() {
//   useEffect(() => {
//     import('bootstrap/dist/js/bootstrap.bundle.min.js');
//   }, []);

// //   return (
// //     <div className="container-fluid p-5">
// //   <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="#">Navbar</a>
// //     <button
// //       className="navbar-toggler"
// //       type="button"
// //       data-bs-toggle="collapse"
// //       data-bs-target="#navbarSupportedContent"
// //       aria-controls="navbarSupportedContent"
// //       aria-expanded="false"
// //       aria-label="Toggle navigation"
// //     >
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="../WebsitePage">Home</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="../WebsitePage">Contact</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="../WebsitePage">About</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="../WebsitePage">Feedback</a>
// //         </li>
       
       
// //       </ul>

// //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //       <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="../WebsitePage">Register</a>
// //         </li>
// // </ul>

// //       <form className="d-flex" role="search">
// //         <input
// //           className="form-control me-2"
// //           type="search"
// //           placeholder="Search"
// //           aria-label="Search"
// //         />
// //         <button className="btn btn-outline-success" type="submit">Search</button>
// //       </form>
// //     </div>
// //   </div>
// // </nav>

// //     </div>
// //   );
// // }

// return (
//   <div className="container-fluid p-5">
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/WebsitePage">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/Contact">Contact</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/About">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/Feedback">Feedback</a>
//             </li>
//           </ul>
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/Register">Register</a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   </div>
// );
// }





// export default function Header() {
//   // Ensure Bootstrap JS is only loaded once
//   useEffect(() => {
//     import('bootstrap/dist/js/bootstrap.bundle.min.js');
//   }, []);

//   return (
//     <div className=" container-fluid p-5">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="../WebsitePage">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="../WebsitePage">Contact</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="../WebsitePage">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="../WebsitePage">Feedback</a>
//               </li>
//             </ul>

//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="../WebsitePage">Register</a>
//               </li>
//             </ul>

//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

'use client';
import React, { useState } from "react";
import '../globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md p-3">
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
        <div className={` ml-14 flex-1 lg:flex items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-0 text-gray-700 font-medium">
            <li><a href="../WebsitePage" className="hover:text-green-600">Home</a></li>
            <li><a href="../WebsitePage" className="hover:text-green-600">Features</a></li>
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

