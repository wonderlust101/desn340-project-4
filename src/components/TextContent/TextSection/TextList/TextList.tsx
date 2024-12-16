import './TextList.scss'
import {applyHighlight} from "../../../../utils/TextFormatter";

type TextListType = {
    listItems: (string | string[] | TextContent)[];
};

export default function TextList({listItems}: TextListType) {
    return (
        <ul className="text-list">
            {listItems.map((item, index) => {
                if (typeof item === "string") {
                    return <li key={index}>{applyHighlight(item)}</li>;
                }
                else if (Array.isArray(item)) {
                    return (
                        <li key={index}>
                            <TextList listItems={item}/>
                        </li>
                    );
                }
                else {
                    return null;
                }
            })}
        </ul>
    );
}