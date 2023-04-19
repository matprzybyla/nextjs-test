import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
      <p className="text-3xl font-bold border-4 rounded-lg text-center text-orange-600 border-slate-600 m-4 p-2">
        PrintIO
      </p>
      <Component {...pageProps} />
    </div>
}
