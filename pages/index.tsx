import Head from "next/head";
import Link from "next/link";

import animation from "../animation.json";
import Lottie from "lottie-react";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <Head>
        <title>JSONic</title>
        <meta
          name="description"
          content="This project is a clone of JSONPlaceholder, which is a fake REST API for testing and prototyping. It provides a set of endpoints that return dummy data in JSON format. The purpose of this clone is to allow developers to locally test and develop their applications without relying on the external API."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="h-20 flex justify-between items-center max-w-4xl mx-auto px-4">
        <div className="font-medium">
          <Link href="/" title="Home">
            JSONic
          </Link>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link className="hover:text-teal-600" href="/try">
              Try API
            </Link>
          </li>
          <li>
            <Link className="hover:text-teal-600" href="/guide">
              Guide
            </Link>
          </li>
        </ul>
      </header>
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
      <footer className="h-20 flex items-center max-w-4xl mx-auto px-4">
        <p>
          Coded by{" "}
          <a
            className="text-teal-600 underline"
            href="https://linkedin.com/in/dasu-rahul"
            target="_blank"
          >
            rahul
          </a>{" "}
          with ❤️
        </p>
      </footer>
    </>
  );
}
