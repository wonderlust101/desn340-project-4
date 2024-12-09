import "./Header.scss";
import {useState} from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FullSizeHeader from "./FullSizeHeader";
import MobileHeader from "./MobileHeader";

type link = {
    location: string;
    href: string;
}

const links: link[] = [
    {
        'location': 'Service',
        'href': "#"
    },
    {
        'location': 'Workshop',
        'href': "#"
    },
    {
        'location': 'Bike Shop',
        'href': "#"
    },
    {
        'location': 'Resources',
        'href': "#"
    },
    {
        'location': 'About',
        'href': "#"
    },
    {
        'location': 'Blog',
        'href': "#"
    }
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const {width} = useWindowDimensions();

    function handleToggleMenu() {
        setIsOpen(!isOpen);
    }
    
    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <p className='header__logo'>Bike Edmonton</p>

                {width >= 1312 ? (
                    <FullSizeHeader links={links}/>
                ) : (
                    <MobileHeader links={links} isOpen={isOpen} onClick={handleToggleMenu}/>
                )}
            </div>
        </header>
    );
}
