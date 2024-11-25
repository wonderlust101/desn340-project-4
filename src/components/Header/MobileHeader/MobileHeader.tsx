import React from "react";
import burgerIcon from "/src/assets/images/icon-hamburger.svg";
import "./MobileHeader.scss";

type link = {
    location: string;
    href: string;
};

type headerListProps = {
    links: link[];
    onClick: React.MouseEventHandler<HTMLImageElement>;
    isOpen: boolean;
};

export default function MobileHeader({links, onClick, isOpen}: headerListProps) {

    return (
        <div>
            <img
                className="mobile-header__menu-icon"
                src={burgerIcon}
                alt=""
                role="presentation"
                onClick={onClick}/>

            {isOpen && (<nav className="mobile-header">
                <ul className="mobile-header__links">
                    {links.map((link) => (
                        <li key={link.location}>
                            <a href={link.href} aria-label={"Go to " + link.location + " Page"}>
                                {link.location}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>)}
        </div>
    );
}