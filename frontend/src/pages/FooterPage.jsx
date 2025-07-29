// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-red-600 text-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
//         <div className="absolute top-20 right-20 w-20 h-20 border border-white rounded-full"></div>
//         <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
//         <div className="absolute bottom-10 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main Heading and CTA */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
//           <div className="mb-8 lg:mb-0">
//             <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
//               IGNITE YOUR
//               <br />
//               WEB PRESENCE!
//             </h2>
//           </div>
          
//           <div className="flex-shrink-0">
//             <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
//               <div className="text-center">
//                 <div className="text-sm">START A</div>
//                 <div className="text-sm">PROJECT!</div>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Footer Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Address Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 tracking-wide">ADRESS</h3>
//             <div className="space-y-2 text-sm opacity-90">
//               <p>Woluevska ulka 24</p>
//               <p>11 000 Zagreb</p>
//               <p>Hrvatska</p>
//             </div>
//           </div>

//           {/* Links Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 tracking-wide">LINKS</h3>
//             <div className="space-y-3 text-sm">
//               <a href="#" className="block hover:underline opacity-90 hover:opacity-100 transition-opacity">
//                 Projects
//               </a>
//               <a href="#" className="block hover:underline opacity-90 hover:opacity-100 transition-opacity">
//                 Services
//               </a>
//               <a href="#" className="block hover:underline opacity-90 hover:opacity-100 transition-opacity">
//                 My courses
//               </a>
//               <a href="#" className="block hover:underline opacity-90 hover:opacity-100 transition-opacity">
//                 Faq
//               </a>
//             </div>
//           </div>

//           {/* Legal Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 tracking-wide">NEŠTO NEBITNO</h3>
//             <div className="space-y-3 text-sm">
//               <a href="#" className="block hover:underline opacity-90 hover:opacity-100 transition-opacity">
//                 Cookie policy
//               </a>
//               <a href="#" className="block hover:underline opacity-90 hover:opacity-100 transition-opacity">
//                 Privacy policy
//               </a>
//               <a href="#" className="block hover:underline opacity-90 hover:opacity-100 transition-opacity">
//                 Neki linkovi
//               </a>
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 tracking-wide">CONTACT</h3>
//             <div className="space-y-3 text-sm">
//               <a 
//                 href="mailto:info@kratosdigital.com" 
//                 className="block hover:underline opacity-90 hover:opacity-100 transition-opacity"
//               >
//                 info@kratosdigital.com
//               </a>
//               <a 
//                 href="tel:+38598183365" 
//                 className="block hover:underline opacity-90 hover:opacity-100 transition-opacity"
//               >
//                 +385 98 1843 365
//               </a>
//             </div>

//             {/* Social Media Icons */}
//             <div className="mt-6 flex space-x-4">
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
//                 aria-label="Facebook"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//               </a>
              
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-2.508 0-4.54-2.033-4.54-4.54s2.032-4.54 4.54-4.54c2.508 0 4.54 2.032 4.54 4.54s-2.032 4.54-4.54 4.54zm7.119 0c-2.508 0-4.54-2.033-4.54-4.54s2.032-4.54 4.54-4.54c2.508 0 4.54 2.032 4.54 4.54s-2.032 4.54-4.54 4.54z"/>
//                 </svg>
//               </a>
              
//               <a 
//                 href="#" 
//                 className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
//                 aria-label="LinkedIn"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-white border-opacity-20">
//           <div className="text-sm opacity-75 mb-4 md:mb-0">
//             Design by <span className="font-bold">LEON A.</span>
//           </div>
//           <div className="text-sm opacity-75">
//             Copyright <span className="font-bold">KRATOS DIGITAL</span> 2023
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import xyz from "../components/main.png"

export default function FooterPage() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-white">
                Start building accessible web experiences today
              </h2>
              <p className="text-slate-400 text-lg">
                Join thousands of developers using Inclusight to create a more inclusive internet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors duration-200">
                Contact us
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={xyz} alt="Inclusight Logo" className="w-16 h-8" />
              <span className="text-2xl font-semibold">Inclusight</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Inclusight empowers developers and teams to analyze, audit and improve website accessibility for all users. Let's build a more inclusive web.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-medium mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-slate-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-white">About</a></li>
              <li><a href="/testimonials" className="text-slate-400 hover:text-white">Testimonials</a></li>
              <li><a href="/analyze" className="text-slate-400 hover:text-white">Analyzer</a></li>
            </ul>
          </div>  

          {/* Features */}
          <div>
            <h3 className="text-white font-medium mb-6">Features</h3>
            <ul className="space-y-4">
              <li><span className="text-slate-400">Color contrast analysis</span></li>
              <li><span className="text-slate-400">Font & layout audit</span></li>
              <li><span className="text-slate-400">Code recommendations</span></li>
              <li><span className="text-slate-400">Accessible reports</span></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white flex  flex-row items-center gap-2"><FaTwitter/> Twitter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white flex  flex-row items-center gap-2"><FaGithub/> GitHub</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white flex  flex-row items-center gap-2"><FaInstagram/> Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          © 2025 Inclusight. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

