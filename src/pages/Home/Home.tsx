import "./Home.scss";
import Header from "../../components/Header";
import Hero from "./Hero/Hero";
import AboutUs from "./About Us";
import Services from "./Services";
import Footer from "../../components/Footer";
import FeaturedBikes from "./FeaturedBikes";
import LatestBlog from "./LatestBlog";

export default function Home() {
    document.title = "Bike Edmonton | Home";

    return (
        <div>
            <Header/>
            
            <main className='home grid-bleed'>
                <Hero/>
                <AboutUs/>
                <Services/>
                <FeaturedBikes/>
                <LatestBlog/>
            </main>
            
            <Footer/>
        </div>
    );
}