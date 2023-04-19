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
        <Footer></Footer>
      </div>
    </>
  )
}
