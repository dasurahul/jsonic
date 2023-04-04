import { useState } from "react";

import Head from "next/head";
import Link from "next/link";

import { Highlighter } from "rc-highlight";

export default function Try() {
  const [res, setRes] = useState("");

  function runScript() {
    fetch("/api/users/1")
      .then((res) => res.json())
      .then((data) => setRes(JSON.stringify(data, null, 2)))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <Head>
        <title>JSONic | Try</title>
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
      <main className="max-w-4xl mx-auto">
        <div className="px-4">
          <div className="my-8">
            <h1 className="text-4xl font-semibold text-gray-800 tracking-widest mb-4">
              Try It
            </h1>
            <p className="text-gray-600 mb-4">
              Run this code here, in a console or from any site:
            </p>
            <div className="mb-8">
              <Highlighter copyToClipBoard={false}>
                {`fetch('${process.env.NEXT_PUBLIC_URL}/api/users/1').then(response => response.json()).then(json => console.log(json))`}
              </Highlighter>
            </div>
            <button
              className="bg-teal-600 text-white px-6 py-2 rounded-[0.25rem] transition hover:bg-teal-800 animate-bounce mb-8"
              onClick={runScript}
            >
              Run Script
            </button>
            <div>
              <Highlighter copyToClipBoard={false}>{res || "{}"}</Highlighter>
            </div>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-widest mb-4">
              When to use
            </h2>
            <p className="text-gray-600 mb-4">
              JSONic is a free online REST API that you can use whenever you
              need some fake data. It can be in a README on GitHub, for a demo
              on CodeSandbox, in code examples on Stack Overflow, ...or simply
              to test things locally.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-widest mb-4">
              Resources
            </h2>
            <p className="text-gray-600 mb-4">
              JSONic comes with a set of 2 common resources:
            </p>
            <ul className="px-4 max-w-xs mb-4">
              <li className="grid grid-cols-2 gap-4">
                <Link
                  className="text-teal-600 underline"
                  href="/api/users"
                  target="_blank"
                >
                  /api/users
                </Link>
                <span>10 users</span>
              </li>
              <li className="grid grid-cols-2 gap-4">
                <Link
                  className="text-teal-600 underline"
                  href="/api/posts"
                  target="_blank"
                >
                  /api/posts
                </Link>
                <span>100 posts</span>
              </li>
            </ul>
            <p>
              <strong>Note:</strong> resources have relations. For example:
              users have many posts.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-widest mb-4">
              Routes
            </h2>
            <ul className="px-4 max-w-xs mb-4">
              <li className="grid grid-cols-2 gap-4">
                <span>GET</span>
                <span>
                  <Link
                    className="text-teal-600 underline"
                    href="/api/users"
                    target="_blank"
                  >
                    /api/users
                  </Link>
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4">
                <span>GET</span>
                <span>
                  <Link
                    className="text-teal-600 underline"
                    href="/api/users?username=Bret"
                    target="_blank"
                  >
                    /api/users?username=Bret
                  </Link>
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4">
                <span>GET</span>
                <span>
                  <Link
                    className="text-teal-600 underline"
                    href="/api/posts"
                    target="_blank"
                  >
                    /api/posts
                  </Link>
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4">
                <span>GET</span>
                <span>
                  <Link
                    className="text-teal-600 underline"
                    href="api/users/1"
                    target="_blank"
                  >
                    /api/users/1
                  </Link>
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4">
                <span>GET</span>
                <span>
                  <Link
                    className="text-teal-600 underline"
                    href="/api/posts/1"
                    target="_blank"
                  >
                    /api/posts/1
                  </Link>
                </span>
              </li>
            </ul>
            <p>
              <strong>Note:</strong> See{" "}
              <Link className="text-teal-600 underline" href="/guide">
                guide
              </Link>{" "}
              for usage examples.
            </p>
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
