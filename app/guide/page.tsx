import { Highlighter } from "rc-highlight";

export default function GuidePage() {
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
    <main className="max-w-4xl mx-auto">
      <div className="px-4">
        <div className="my-8">
          <h1 className="text-4xl font-semibold text-gray-800 tracking-widest mb-4">
            Guide
          </h1>
          <p className="text-gray-600 mb-4">
            Below you&apos;ll find example using Fetch API but you can use
            JSONify with any other language. You can copy paste the code in your
            browser console to quickly test JSONify.
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
  );
}
