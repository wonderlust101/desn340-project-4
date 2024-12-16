import "./BikeShop.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";

import sectionHeroImage from "/images/used-bike-shop-hero.png";


import bikesJson from "../../data/bikes.json";
import ProductHeader from "./ProductHeader";
import BikeShopProducts from "./BikeShopProducts";
import MoreInfo from "./MoreInfo";
import {useState} from "react";

const bikes: Bike[] = bikesJson;

export default function BikeShop() {
    const [currentSize, setCurrentSize] = useState("All");
    document.title = "Bike Edmonton | Bike Shop";

    return (
        <div>
            <Header/>

            <main className="bike-shop grid-bleed">
                <SectionHero
                    header="Used Bike Shop"
                    imageUrl={sectionHeroImage}
                    imagePosition="bottom"
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