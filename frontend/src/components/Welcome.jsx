import React from 'react';


const Welcome = () => {
return (
<section
className="min-h-screen flex items-center justify-center px-4  bg-cover bg-center"
style={{
backgroundImage: "url('im8.jpg')",
}}
>
<div className="text-center space-y-6 z-10">
{/* WELCOME */}
<h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight">
WELCOME
</h1>
    {/* to */}
    <p className="text-white text-4xl md:text-5xl italic">to</p>

    {/* INCLUSIGHT with image fill */}
    <h2
      className="text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent"
      style={{
        backgroundImage: "url('im8.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      INCLUSIGHT
    </h2>
  </div>

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50" />
</section>
);
};

export default Welcome;