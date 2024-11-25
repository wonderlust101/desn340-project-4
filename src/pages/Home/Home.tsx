import "./Home.scss";
import Header from "../../components/Header/Header";
import Hero from "./Hero/Hero";

export default function Home() {
    document.title = "Bike Edmonton | Home";

    return (
        <main>
            <Header/>
            <Hero/>
        </main>
    );
}