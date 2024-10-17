"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../lib/utlis";
import { NavLink } from "react-router-dom";
import homeImage from "../assets/people_img.jpg";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-black flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div
        className={cn("md:text-4xl text-xl text-white relative z-20")}>


      {/* landing */}
      <main className="container mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">
            Compete in the <span className="text-blue-300">CodeArena</span>.
            <br />
            Challenge. Improve. Win.
          </h1>
          <p className="mb-8 text-xl text-blue-100">
            Sharpen your coding skills with intense challenges,
            <br />
            compete against others, and climb the ranks.
          </p>
          <button size="lg" className="bg-emerald-400 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-emerald-300 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50">
  Enter the Arena
</button>
          <p className="mt-4 text-sm text-blue-200">
          Be among the first to battle in CodeArena, the ultimate coding battleground.
            <br />
            Join now and start competing—it's free!
          </p>
        </main>
  
          
          
        {/* <div className="hero-buttons">
            <NavLink to="/dashboard" className="navbar-brand">
              <button className="mt-3 px-10 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
                <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <span className="relative">Play Now</span>
              </button>
            </NavLink>
          </div> */}

      </div>
    </div>
  );
}
