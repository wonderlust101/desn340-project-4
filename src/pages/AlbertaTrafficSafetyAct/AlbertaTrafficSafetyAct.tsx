import "./AlbertaTrafficSafetyAct.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";
import TextContent from "../../components/TextContent";
import sectionHeroImage from "/images/alberta-traffic-safety-act-hero.webp";
import atsaContentJSON from "../../data/atsa.json";

export default function AlbertaTrafficSafetyAct() {
    document.title = "Bike Edmonton | Alberta Traffic Safety Act";
    
    const textContent: TextSection[] = atsaContentJSON;

    return (
        <>
            <Header />

            <main className="alberta-tsa grid-bleed">
                <SectionHero
                    header="Alberta Traffic Safety Act"
                    imageUrl={sectionHeroImage}
                    imagePosition="center"
                    imageAlt='A group of people biking in the winter.'
                />

                <TextContent textContent={textContent}/>
            </main>

            <Footer />
        </>
    );
}






