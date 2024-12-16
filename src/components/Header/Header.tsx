import "./Header.scss";
import {useState} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FullSizeHeader from "./FullSizeHeader";
import MobileHeader from "./MobileHeader";
import linksJSON from "../../data/siteLinks.json";

const links: Links[] = linksJSON;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const {width} = useWindowDimensions();

    function handleToggleMenu() {
        setIsOpen(!isOpen);
    }
    
    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <a className='header__logo' href='/desn340-project-4/'>Bike Edmonton</a>

                {width >= 1312 ? (
                    <FullSizeHeader links={links}/>
                ) : (
                    <MobileHeader links={links} isOpen={isOpen} onClick={handleToggleMenu}/>
                )}
            </div>
        </header>
    );
}
