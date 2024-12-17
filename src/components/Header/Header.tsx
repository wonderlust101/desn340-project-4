import {useState} from "react";
import "./Header.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FullSizeHeader from "./FullSizeHeader";
import MobileHeader from "./MobileHeader";
import linksJSON from "../../data/siteLinks.json";

export default function Header() {
    const links: Links[] = linksJSON;

    const [isOpen, setIsOpen] = useState(false);
    const {width} = useWindowDimensions();

    function handleToggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <a
                    className="header__logo"
                    href="/desn340-project-4/"
                    aria-label="Go to Homepage."
                >
                    Bike Edmonton
                </a>

                {width >= 1360 ? (
                    <FullSizeHeader links={links}/>
                ) : (
                    <MobileHeader
                        links={links}
                        isOpen={isOpen}
                        onClick={handleToggleMenu}
                    />
                )}
            </div>
        </header>
    );
}
