"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../lib/utlis";
import { NavLink } from "react-router-dom";
import homeImage from "../assets/people_img.jpg";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div
        className={cn(
          "md:text-4xl text-xl text-white relative z-20 hero-section"
        )}
      >
        <div>
          <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight">
            Where coding meets
            <h1>Competition</h1>
          </h1>

          <p class="text-lg text-gray-500 italic mt-4">
            Test your abilities, outthink your rivals, and conquer real-time
            coding challenges.
          </p>
          <div className="hero-buttons">
            <NavLink to="/dashboard" className="navbar-brand">
              <button className="mt-3 px-10 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
                <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <span className="relative">Play Now</span>
              </button>
            </NavLink>
          </div>
        </div>
        <div>
          <img src={homeImage} alt="Home" className="w-full h-80 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}
