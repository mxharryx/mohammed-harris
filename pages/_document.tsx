import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="icon" href="favicon-32x32.ico" sizes="32x32" type="image/ico" />
        <link rel="icon" href="favicon-16x16.ico" sizes="16x16" type="image/ico" /> 
        <link rel="apple-touch-icon" href="favicon.ico" type="image/ico"/>
        <link rel="alternate" href="https://mohammed-harris.vercel.app" hrefLang="x-default" />
        <link rel="canonical" href="https://mohammed-harris-vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,300&family=Encode+Sans+Semi+Condensed&family=La+Belle+Aurore&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
          )
}
