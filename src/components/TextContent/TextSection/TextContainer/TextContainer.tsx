import './TextContainer.scss'

import {applyHighlight, convertToTag} from "../../../../utils/TextFormatter";
import TextList from "../TextList";

type textContainerType = {
    header?: string;
    beforeText?: string;
    listItems: (string[] | TextContent)[];
}

export default function TextContainer({header, beforeText, listItems}: textContainerType) {
    return (
        <div className="text-container">
            {beforeText && <p>{beforeText}</p>}
            {header && <h4 id={convertToTag(header)}>{header}</h4>}

            <div className="text-container__box">
                {listItems.map((item, i) => {
                    if (typeof item === "string") {
                        return <p key={i}>{applyHighlight(item)}</p>;
                    }
                    else if (Array.isArray(item)) {
                        return <TextList listItems={item} key={i}/>;
                    }
                })}
            </div>
        </div>
    );
}