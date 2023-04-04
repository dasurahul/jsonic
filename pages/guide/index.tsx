import Head from "next/head";
import Link from "next/link";

import { Highlighter } from "rc-highlight";

export default function Guide() {
  const example = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  return (
    <>
      <Head>
        <title>JSONic | Guide</title>
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
              Guide
            </h1>
            <p className="text-gray-600 mb-4">
              Below you&apos;ll find example using Fetch API but you can use
              JSONic with any other language. You can copy paste the code in
              your browser console to quickly test JSONic.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-widest mb-4">
              Getting a resource
            </h2>
            <div className="mb-4">
              <Highlighter copyToClipBoard={false}>
                {`fetch('${process.env.NEXT_PUBLIC_URL}/api/users/1').then(response => response.json()).then(json => console.log(json))`}
              </Highlighter>
            </div>
            <h3 className="mb-4">Output 👇</h3>
            <div>
              <Highlighter copyToClipBoard={false}>
                {JSON.stringify(example, null, 2)}
              </Highlighter>
            </div>
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
