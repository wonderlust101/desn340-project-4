import './TextSection.scss'

import Button from "../../Button";
import TextContainer from "./TextContainer";
import {convertToTag} from "../../../utils/TextFormatter";

type textSectionType = {
    header: string;
    subHeader?: string;
    sectionNumber: number;
    text: TextContent[];
    button: Button;
}

export default function TextSection({header, subHeader, sectionNumber, text, button}: textSectionType) {

    return (
        <section className="text-section">
            <div className="text-section__header">
                <h2 id={convertToTag(header)}>{sectionNumber}. {header}</h2>
                {subHeader && <h3 className="text-section__sub-header">{subHeader}</h3>}
            </div>

            <div className="text-section__body">
                {text.map((item, index) => {
                    if (typeof item === "string") {
                        return <p key={index}>{item}</p>;
                    }
                    else {
                        return (
                            <TextContainer
                                key={index}
                                header={item.header}
                                beforeText={item.beforeText}
                                listItems={item.definition}
                            />
                        );
                    }
                })}

                {button && <Button variant="button--black" location={button.href}>{button.title}</Button>}
            </div>
        </section>
    );
}