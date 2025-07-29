// import React from "react";

// const About = () => {
//   return (
//     <section className="min-h-screen mt-10 bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8 lg:order-1">
//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               We're changing
//               <br />
//               the way people
//               <br />
//               connect
//             </h1>

//             <p className="text-lg text-gray-600 leading-relaxed max-w-md">
//               Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
//               cupidatat mollit qute velit. Et labore commodo nulla aliqua
//               proident mollit ullamco exercitation tempor. Sint aliqua anim
//               nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
//               tempor esse minim amet fugiat veniam occaecat aliqua.
//             </p>
//           </div>

//           {/* Right Image Grid */}
//           <div className="relative lg:order-2">
//             <div className="grid grid-cols-2 gap-4 h-[600px] lg:ml-8">
//               {/* Column 1 */}
//               <div className="space-y-4">
//                 {/* Top image - Woman with laptop */}
//                 <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 transform rotate-1 hover:rotate-0 transition-transform duration-300">
//                   <img
//                     src="https://images.unsplash.com/photo-1494790108755-2616c95448c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=800&q=80"
//                     alt="Woman working on laptop"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Bottom image - Office workspace */}
//                 <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
//                   <img
//                     src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=400&q=80"
//                     alt="Modern office workspace"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Column 2 */}
//               <div className="space-y-4 pt-8">
//                 {/* Gaming/Tech person */}
//                 <div className="relative overflow-hidden rounded-2xl shadow-lg h-48 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
//                   <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20"></div>
//                   <img
//                     src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=400&q=80"
//                     alt="Person gaming"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Green shirt person */}
//                 <div className="relative overflow-hidden rounded-2xl shadow-lg h-56 transform rotate-2 hover:rotate-0 transition-transform duration-300">
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=600&q=80"
//                     alt="Woman in green shirt"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Business meeting */}
//                 <div className="relative overflow-hidden rounded-2xl shadow-lg h-48 transform rotate-1 hover:rotate-0 transition-transform duration-300">
//                   <img
//                     src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=400&q=80"
//                     alt="Business meeting"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Floating decorative elements */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
//             <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse delay-700"></div>
//           </div>
//         </div>
//       </div>

//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//         <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;

import React from "react";
import im1 from "../components/im1.png";
import im2 from "../components/im2.png";
import im3 from "../components/im3.png";
import im4 from "../components/im4.png";
import im5 from "../components/im5.png";
import im6 from "../components/im6.png";
import im7 from "../components/im7.jpg";
import im8 from "../components/im8.jpg";
import im10 from "../components/im10.png";
import eye1 from "../components/eye1.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <div className="mb-2">We're improving</div>

              <div className="mb-2">
                <span className="grade1">accessibility</span> for all
              </div>

              <div>on the web</div>
            </h1>
            <p className="text-lg leading-relaxed max-w-md opacity-[0.8]">
              Inclusight is a modern accessibility analyzer that helps
              developers, designers, and teams audit their websites and
              applications for better accessibility. Our tool detects WCAG
              issues like color contrast, font sizes, missing ARIA labels and
              more — making the web usable for everyone, including users with
              visual or motor impairments.
            </p>
            <p className="text-md leading-relaxed opacity-[0.6]">
              “Our mission is to build a more inclusive digital world by
              empowering creators with the right tools.”
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="relative lg:order-2">
            <div className="grid grid-cols-2 gap-8 h-[600px] lg:ml-8">
              <div className="space-y-5">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64 transform rotate-3 hover:rotate-0 transition-transform duration-200 ">
                  <img
                    src={im5}
                    alt="Woman using accessibility tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64 transform -rotate-3 hover:rotate-0 transition-transform duration-200 ">
                  <img
                    src={eye1}
                    alt="Office environment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-48 transform -rotate-3 hover:rotate-0 transition-transform duration-200 ">
                  <img
                    src={im7}
                    alt="Accessibility testing in progress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-56 transform rotate-3 hover:rotate-0 transition-transform duration-200 ">
                  <img
                    src={im8}
                    alt="User interface testing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-2xl shadow-2xl  transform rotate-3 hover:rotate-0 transition-transform duration-200 ">
                  {/* <img
                    src={im6}
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  /> */}
                  {/* <DotLottieReact
                    src="https://lottie.host/41749e88-313e-4b78-bd9b-910a1d8679fb/t1r390IC5a.lottie"
                    loop
                    autoplay
                  /> */}
                  <DotLottieReact
                    src="https://lottie.host/910acadc-0741-40e5-91bc-b810db20c456/p8fhfYMdxF.lottie"
                    loop
                    autoplay
                    className="scale-[1.8]"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40 animate-pulse delay-500"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500  rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
