import { Footer } from "./Footer"
import { Header } from "./Header"
import { MainContent } from "./MainContent"

export const Layout = () => {
    return <section className="max-w-6xl flex flex-col">
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
    </section>
}