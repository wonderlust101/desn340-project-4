import "./AlbertaTrafficSafetyAct.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import atsaContentJSON from "../../data/atsa.json";
import SectionHero from "../../components/SectionHero";

const textContent: Regulation[] = atsaContentJSON;

export default function AlbertaTrafficSafetyAct() {
    document.title = "Bike Edmonton | Alberta Traffic Safety Act";

    return (
        <div>
            <Header />

            <main className="alberta-tsa grid-bleed">
                <SectionHero header="Alberta Traffic Safety Act" />

                <section className="alberta-tsa__text-content">
                    {textContent.map((section, index) => (
                        <section className="alberta-tsa__section" key={index}>
                            <div className="alberta-tsa__section-header">
                                <h2>{index + 1}. {section.header}</h2>
                                {section.subHeader && <h3>{section.subHeader}</h3>}
                            </div>

                            <div className="alberta-tsa__section-body">
                                {section.text.map((item, i) => {
                                    if (typeof item === "string") {
                                        return <p key={i}>{item}</p>;
                                    } else {
                                        return (
                                            <div className="alberta-tsa__regulation" key={i}>
                                                {item.beforeText && <p>{item.beforeText}</p>}
                                                {item.header && <h4>{item.header}</h4>}

                                                <div className="alberta-tsa__regulation-container">
                                                    {item.content.map((subItem, j) => {
                                                        if (typeof subItem === "string") {
                                                            return <p key={j}>{subItem}</p>;
                                                        } else if (Array.isArray(subItem)) {
                                                            return (
                                                                <ul className="alberta-tsa__regulation-list" key={j}>
                                                                    {subItem.map((nestedItem: string, index: number) => (
                                                                        <li key={index}>{nestedItem}</li>
                                                                    ))}
                                                                </ul>
                                                            );
                                                        } else {
                                                            return null;
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </section>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}
