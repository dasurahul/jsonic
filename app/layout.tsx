import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "JSONify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="h-20 flex justify-between items-center max-w-4xl mx-auto px-4">
          <div className="font-medium">
            <Link href="/" title="Home">
              JSONify
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
        {children}
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
      </body>
    </html>
  );
}
