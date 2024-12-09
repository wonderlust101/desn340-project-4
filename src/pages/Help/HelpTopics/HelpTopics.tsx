import "./HelpTopics.scss";
import React from "react";
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
            
            <div>
                {helpTopics.map((topic, index) => (
                    <div key={index}> {/*Turn to link*/}
                        {topic.icon}
                        <h2>{topic.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
}