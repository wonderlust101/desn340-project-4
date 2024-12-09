import "./BikeShop.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";


export default function BikeShop() {
    document.title = "Bike Edmonton | Bike Shop";

    return (
        <div>
            <Header/>
            
            <main className='bike-shop grid-bleed'>
                <SectionHero header='Used Bike Shop'/>
            </main>
            
            <Footer/>
        </div>
    );
}