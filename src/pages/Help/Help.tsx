import "./Help.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHero from "../../components/SectionHero";
import TopicSearch from "./TopicSearch";
import HelpTopics from "./HelpTopics";
import FAQ from "./FAQ";


export default function Help() {
    document.title = "Bike Edmonton | Help Centre";

    return (
        <div>
            <Header/>

            <main className="help grid-bleed">
                <SectionHero 
                    header="Help Centre"
                />
                <TopicSearch/>
                <HelpTopics/>
                <FAQ/>
            </main>

            <Footer/>
        </div>
    );
}