// import React, { useRef, useState, useEffect } from "react";

// const testimonials = [
//   {
//     name: "Samantha Johnson",
//     role: "Frontend Engineer",
//     image: "https://randomuser.me/api/portraits/women/21.jpg",
//     comment:
//       "Exceeded our expectations with innovative audits that brought accessibility to life – a truly helpful analyzer.",
//   },
//   {
//     name: "Isabella Rodriguez",
//     role: "Product Designer",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     comment:
//       "Their ability to identify contrast and label issues in real projects is unparalleled – a developer-friendly tool.",
//   },
//   {
//     name: "Gabrielle Williams",
//     role: "A11y Advocate",
//     image: "https://randomuser.me/api/portraits/women/55.jpg",
//     comment:
//       "Simple, powerful analyzer that listens and reports what really matters. A game-changer for inclusive teams.",
//   },
//   {
//     name: "Victoria Thompson",
//     role: "DevOps Engineer",
//     image: "https://randomuser.me/api/portraits/women/41.jpg",
//     comment:
//       "Highly recommend this for any accessibility audits – delivers accurate results fast.",
//   },
//   {
//     name: "John Peter",
//     role: "Web Consultant",
//     image: "https://randomuser.me/api/portraits/men/44.jpg",
//     comment:
//       "A reliable partner for frontend accessibility checks and downloadable reports.",
//   },
//   {
//     name: "Natalie Martinez",
//     role: "QA Engineer",
//     image: "https://randomuser.me/api/portraits/women/72.jpg",
//     comment:
//       "From contrast to keyboard checks, this tool makes debugging accessibility issues a breeze.",
//   },
//   {
//     name: "Kevin Scott",
//     role: "UX Designer",
//     image: "https://randomuser.me/api/portraits/men/29.jpg",
//     comment:
//       "This tool drastically improved our onboarding flow accessibility — easy to use and reliable.",
//   },
//   {
//     name: "Emily Parker",
//     role: "Accessibility Consultant",
//     image: "https://randomuser.me/api/portraits/women/33.jpg",
//     comment:
//       "Thorough reports and issue breakdowns helped us meet WCAG compliance with confidence.",
//   },
//   {
//     name: "Liam Bennett",
//     role: "Tech Lead",
//     image: "https://randomuser.me/api/portraits/men/17.jpg",
//     comment:
//       "A practical analyzer with developer-first design — it saved hours on manual reviews.",
//   },
// ];

// export default function Testimonials() {
//   const topRowRef = useRef(null);
//   const bottomRowRef = useRef(null);
//   const [paused, setPaused] = useState(false);

//   useEffect(() => {
//     let topFrame;
//     let bottomFrame;

//     const scrollTop = () => {
//       if (!topRowRef.current || paused) return;
//       topRowRef.current.scrollLeft += 0.5;
//       topFrame = requestAnimationFrame(scrollTop);
//     };

//     const scrollBottom = () => {
//       if (!bottomRowRef.current || paused) return;
//       bottomRowRef.current.scrollLeft -= 0.5;
//       bottomFrame = requestAnimationFrame(scrollBottom);
//     };

//     topFrame = requestAnimationFrame(scrollTop);
//     bottomFrame = requestAnimationFrame(scrollBottom);

//     return () => {
//       cancelAnimationFrame(topFrame);
//       cancelAnimationFrame(bottomFrame);
//     };
//   }, [paused]);

//   return (
//     <div className="py-12 px-4 max-w-7xl h-screen mt-12 mx-auto">
//       <div className="text-center mb-6">
//         <div className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-4">
//           ⭐ Rated 4.8/5 by over 10,000 devs
//         </div>
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Words of praise from developers around the world
//         </h2>
//       </div>
//       <div
//         onClick={() => setPaused(!paused)}
//         className="cursor-pointer space-y-6 select-none"
//       >
//         <div
//           ref={topRowRef}
//           className="flex gap-6 overflow-x-scroll no-scrollbar"
//         >
//           {testimonials.slice(0, 3).map((t, idx) => (
//             <div
//               key={idx}
//               className="min-w-[300px] max-w-sm flex-shrink-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-md"
//             >
//               <p className="text-sm text-gray-800 dark:text-white mb-4">
//                 “{t.comment}”
//               </p>
//               <div className="flex items-center gap-3">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-10 h-10 rounded-full border"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white text-sm">
//                     {t.name}
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {t.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div ref={bottomRowRef} className="flex gap-6 overflow-auto">
//           {testimonials.slice(3).map((t, idx) => (
//             <div
//               key={idx}
//               className="min-w-[300px] h-full max-w-sm flex-shrink-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-md"
//             >
//               <p className="text-sm text-gray-800 dark:text-white mb-4">
//                 “{t.comment}”
//               </p>
//               <div className="flex items-center gap-3">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-10 h-10 rounded-full border"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white text-sm">
//                     {t.name}
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {t.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { SiComma } from "react-icons/si";
import { SiOsano } from "react-icons/si";
import { IoIosAperture } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";
import { SiOsf } from "react-icons/si";

const testimonials = [
  {
    name: "Samantha Johnson",
    role: "Frontend Engineer",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    comment:
      "Exceeded our expectations with innovative audits that brought accessibility to life – a truly helpful analyzer.",
  },
  {
    name: "Isabella Rodriguez",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    comment:
      "Their ability to identify contrast and label issues in real projects is unparalleled – a developer-friendly tool.",
  },
  {
    name: "Gabrielle Williams",
    role: "A11y Advocate",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    comment:
      "Simple, powerful analyzer that listens and reports what really matters. A game-changer for inclusive teams.",
  },
  {
    name: "Victoria Thompson",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    comment:
      "Highly recommend this for any accessibility audits – delivers accurate results fast.",
  },
  {
    name: "John Peter",
    role: "Web Consultant",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    comment:
      "A reliable partner for frontend accessibility checks and downloadable reports.",
  },
  {
    name: "Natalie Martinez",
    role: "QA Engineer",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    comment:
      "From contrast to keyboard checks, this tool makes debugging accessibility issues a breeze.",
  },
  {
    name: "Kevin Scott",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    comment:
      "This tool drastically improved our onboarding flow accessibility — easy to use and reliable.",
  },
  {
    name: "Emily Parker",
    role: "Accessibility Consultant",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    comment:
      "Thorough reports and issue breakdowns helped us meet WCAG compliance with confidence.",
  },
  {
    name: "Liam Bennett",
    role: "Tech Lead",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    comment:
      "A practical analyzer with developer-first design — it saved hours on manual reviews.",
  },
];

const DuplicateRow = ({ items, reverse = false }) => (
  <div
    className={`flex w-max gap-6 animate-scroll ${
      reverse ? "animate-scroll-reverse" : ""
    }`}
  >
    {" "}
    {items.concat(items).map((t, idx) => (
      <div
        key={idx}
        className="min-w-[300px] max-w-xs bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-300 dark:border-gray-700 shadow-lg"
      >
        {" "}
        <div className="flex flex-row mb-3 gap-1 justify-end">
          {/* <SiComma className="rotate-180 text-[#d336ff]" />
          <SiComma className="rotate-180 text-[#e73c3c]" /> */}

          {/* <SiOsano className="text-green-500"/>
          <SiOsano className="text-yellow-500"/>
          <SiOsano className="text-red-500"/> */}

          <SiOsf className="text-green-500 text-xs"/>
          <SiOsf className="text-yellow-500 text-xs"/>
          <SiOsf className="text-red-500 text-xs"/>

        </div>
        <p className="text-sm text-gray-700 dark:text-white mb-4">
          “{t.comment}”
        </p>{" "}
        <div className="flex items-center gap-3">
          {" "}
          <img
            src={t.image}
            alt={t.name}
            className="w-10 h-10 rounded-full border"
          />{" "}
          <div>
            {" "}
            <p className="font-semibold text-sm text-gray-900 dark:text-white">
              {t.name}
            </p>{" "}
            <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    ))}{" "}
  </div>
);
export default function Testimonials() {
  return (

    <div className="mt-10 w-full px-4 max-w-7xl h-screen mx-auto space-y-8">
      <div className="text-center flex justify-center items-center flex-col mb-6 gap-5">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">What People Say About <span className="grade1">Inclusight</span> ?</h2>
        <div className="inline-block bg-black text-white text-lg px-5 py-1 mt-4 rounded-full mb-8">
          {" "}
          ⭐ Rated 4.8/5 by over 10,000 devs
        </div>
      </div>

      <div className="overflow-hidden group">
        <div className="inline-block w-full group-hover:[animation-play-state:paused] cursor-pointer">
          <DuplicateRow items={testimonials.slice(0, 3)} />
        </div>
      </div>
      <div className="overflow-hidden group">
        <div className="inline-block w-full group-hover:[animation-play-state:paused] cursor-pointer">
          <DuplicateRow items={testimonials.slice(2)} reverse />
        </div>
      </div>
    </div>

  );
}
