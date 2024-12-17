import "./TextContainer.scss";
import TextList from "../TextList";
import {applyHighlight, convertToTag} from "../../../../utils/TextFormatter";

type textContainerType = {
    header?: string;
    beforeText?: string;
    listItems: (string[] | TextContent)[];
}

export default function TextContainer({header, beforeText, listItems}: textContainerType) {
    return (
        <div className="text-container">
            {beforeText &&
                <p>
                    {beforeText}
                </p>
            }

            {header &&
                <h4 id={convertToTag(header)}>
                    {header}
                </h4>
            }

            <div className="text-container__box">
                {listItems.map((item, index) => {
                    if (typeof item === "string") {
                        return (
                            <p key={index}>
                                {applyHighlight(item)}
                            </p>
                        );
                    }
                    else if (Array.isArray(item)) {
                        return (
                            <TextList
                                key={index}
                                listItems={item}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}