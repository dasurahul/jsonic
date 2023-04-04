import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const VERCEL_ID = "prj_90eCgTbr4nhE0O3vhJeG57RWCbcS";
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src={`https://vitals.vercel-insights.com/cdn/vercel-insights.js?v=${Date.now()}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.vercelId='${VERCEL_ID}';
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
