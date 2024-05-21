import LayoutPage from "../../layout/LayoutPage";
import Hero from "../components/Hero";
import { CardNews } from "../components/CardNews";
import About from "../components/About";
export default function Beranda() {
    return (
        <LayoutPage>
            <Hero />
                <CardNews title={'Berita'} count={6} />
            <About />
        </LayoutPage>
    )
}
