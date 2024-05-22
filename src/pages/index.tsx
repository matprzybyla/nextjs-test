import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header></Header>
        <div>home</div>
        <div style={{WebkitOverflowScrolling: "touch", overflow: "scroll", height: "500px", width:"320px", padding: 5, background: "red"}}>
          <iframe src="https://rsmateusz.ngrok.io/bookingswidget" title="booking widget" style={{width: "100%", height: "100%", overflow: "visible"}}></iframe>
        </div>

          {/* <iframe src="https://rsmateusz.ngrok.io/bookingswidget" title="booking widget" style={{width: "320px", height: "500px", overflow: "scroll"}}></iframe> */}
        <Footer></Footer>
      </div>
    </>
  )
}
