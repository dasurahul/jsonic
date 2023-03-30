"use client";

import animation from "../animation.json";
import Lottie from "lottie-react";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto min-h-[calc(100vh_-_10rem)] flex items-center">
      <div className="px-4 grid grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-6xl font-semibold text-gray-800 tracking-widest mb-8">
            {"{JSON}ic"}
          </h1>
          <div className="text-2xl text-gray-600">
            <Typewriter words={["Free fake API"]} loop={10} cursor />
          </div>
        </div>
        <div className="hidden md:block hover:animate-pulse">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </main>
  );
}
