import "./TextNavigation.scss";
import {convertToTag} from "../../../utils/TextFormatter";

type textNavigationProps = {
    textContent: TextSection[];
}

export default function TextNavigation({textContent}: textNavigationProps) {
    return (
        <div className="text-navigation">
            <div className="text-navigation__container">
                {textContent.map((section, index) => (
                    <div className="text-navigation__section" key={index}>
                        <a
                            className="text-navigation__text"
                            href={`#${convertToTag(section.header)}`}
                        >
                            {index + 1}. {section.header}
                        </a>

                        {section.text.some(item => typeof item !== "string" && item.header) && (
                            <div className="text-navigation__sub-sections">
                                {section.text.map((item, subIndex) => {
                                    if (typeof item !== "string") {
                                        return item.header &&
                                            <li key={subIndex}>
                                                <a
                                                    className="text-navigation__text"
                                                    href={`#${convertToTag(item.header)}`}
                                                >
                                                    {item.header}
                                                </a>
                                            </li>;
                                    }
                                })}
                            </div>
                        )}
                    </div>
                ))}

                <div className="text-navigation__section">
                    <a className="text-navigation__text text-navigation__text--small" href="#main-content">
                        Back to top
                    </a>
                </div>
            </div>
        </div>
    );
}