import React from "react";

import "./HelpTopics.scss";

import DIYIcon from "../../../components/Icons/DIYIcon";
import BikeRepairsIcon from "../../../components/Icons/BikeRepairsIcon";
import UsedAndNewPartsIcon from "../../../components/Icons/UsedAndNewPartsIcon";
import BikeSalesIcon from "../../../components/Icons/BikeSalesIcon";

type helpTopic = {
    title: string;
    icon: React.ReactNode;
}

const helpTopics: helpTopic[] = [
    {
        title: "D.I.Y",
        icon : <DIYIcon/>
    },
    {
        title: "Bike Repairs",
        icon : <BikeRepairsIcon/>
    },
    {
        title: "Used and New Parts",
        icon : <UsedAndNewPartsIcon/>
    },
    {
        title: "Bike Sales",
        icon : <BikeSalesIcon/>
    }
];

export default function HelpTopics() {

    return (
        <section className="help-topic">
            <h2>Help Topics</h2>

            <div className="help-topic__topic-grid">
                {helpTopics.map((topic, index) => (
                    <a className="help-topic__topic-box" key={index}>
                        <div className="help-topic__topic-icon">{topic.icon}</div>

                        <h3>{topic.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
}