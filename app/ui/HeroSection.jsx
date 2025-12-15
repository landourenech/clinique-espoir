import React from "react";

export default function HeroSection({ image, title }) {
  return (
    <section>
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-5xl md:text-8xl text-white pt-12 font-bold text-center px-4">
          {title}
        </h1>
      </div>
    </section>
  );
}
