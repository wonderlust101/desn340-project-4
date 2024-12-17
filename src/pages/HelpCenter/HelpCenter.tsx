import "./HelpCenter.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";
import TopicSearch from "./TopicSearch";
import HelpTopics from "./HelpTopics";
import FAQ from "./FAQ";

import sectionHero from "/images/help-center-hero.webp";

export default function HelpCenter() {
    document.title = "Bike Edmonton | Help Centre";

    return (
        <div>
            <Header/>

            <main className="help grid-bleed">
                <SectionHero
                    header="Help Centre"
                    imageUrl={sectionHero}
                    imagePosition="center"
                    imageAlt="A woman getting help from a mechanic to fix a bike."
                />

                <TopicSearch/>

                <HelpTopics/>

                <FAQ/>
            </main>

            <Footer/>
        </div>
    );
}