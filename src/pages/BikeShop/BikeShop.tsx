import {useState} from "react";
import "./BikeShop.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";
import ProductHeader from "./ProductHeader";
import BikeShopProducts from "./BikeShopProducts";
import MoreInfo from "./MoreInfo";
import sectionHeroImage from "/images/used-bike-shop-hero.webp";
import bikesJson from "../../data/bikes.json";


export default function BikeShop() {
    document.title = "Bike Edmonton | Bike Shop";
    
    const bikes: Bike[] = bikesJson;
    const [currentSize, setCurrentSize] = useState("All");

    return (
        <div>
            <Header/>

            <main className="bike-shop grid-bleed">
                <SectionHero
                    header="Used Bike Shop"
                    imageUrl={sectionHeroImage}
                    imagePosition="bottom"
                    imageAlt='Two girls biking down a paved path near the river valley in Edmonton.'
                />

                <ProductHeader
                    setCurrentSize={setCurrentSize}
                    currentSize={currentSize}
                />

                <BikeShopProducts
                    bikeList={bikes}
                    currentSize={currentSize}
                />

                <MoreInfo/>

            </main>
            <Footer/>
        </div>
    );
}