import React from "react";
import "./MobileHeader.scss";
import closeIcon from "/src/assets/images/icon-close.svg";
import burgerIcon from "/src/assets/images/icon-hamburger.svg";

type headerListProps = {
    links: Links[];
    onClick: React.MouseEventHandler<HTMLImageElement>;
    isOpen: boolean;
};

export default function MobileHeader({links, onClick, isOpen}: headerListProps) {

    return (
        <div>
            <img
                className={"mobile-header__menu-icon"}
                src={isOpen ? closeIcon : burgerIcon}
                alt=""
                role="presentation"
                onClick={onClick
            }/>

            {isOpen && (<nav className="mobile-header">
                <ul className="mobile-header__links">
                    {links.map((link) => (
                        <li key={link.header}>
                            <a
                                className="mobile-header__link"
                                href={link.href}
                                aria-label={"Go to " + link.header + " Page"}
                            >
                                {link.header}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>)}
        </div>
    );
}