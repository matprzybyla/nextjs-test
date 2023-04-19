import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-slate-900 text-stone-300">
        <div className="max-w-6xl flex flex-col mx-auto">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
