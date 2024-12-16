import "./Footer.scss";

import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

import linksJSON from "../../data/siteLinks.json";

const links: Links[] = linksJSON;

export default function Footer() {

    return (
        <footer className="footer grid-bleed">
            <section className="footer__container">
                <p className="footer__logo">Bike Edmonton</p>

                <div className="footer__content">
                    <div className="footer__main-section">
                        <div className="footer__contact">
                            <div>
                                {/*Icon*/}

                                <div>
                                    <p>PO Box 1819 Station Main</p>
                                    <p>Edmonton, Alberta</p>
                                    <p>T5J 2P2</p>
                                </div>
                            </div>

                            <div>
                                {/*Icon*/}

                                <p>+ 1 780 433-2453</p>
                            </div>

                            <div>
                                {/*Icon*/}

                                <p>info@bikeedmonton.ca</p>
                            </div>
                        </div>

                        <div className="footer__links">
                            {links.map((link) =>
                                <div key={link.header} className="footer__links-section">
                                    <a
                                        className="footer__link-section-header"
                                        href={link.href}
                                        aria-label={`Go to ${link.header} Page`}
                                    >
                                        {link.header}
                                    </a>

                                    <ul className="footer__sub-links">
                                        {link.subLinks.map((subLink) => (
                                            <li className="footer__sub-link" key={subLink.header}>
                                                <a
                                                    href={subLink.href}
                                                    aria-label={`Go to ${subLink.header} Page`}
                                                >
                                                    {subLink.header}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <p className='footer__acknowledgement'>
                        Bike Edmonton acknowledges that we are located on Treaty 6 territory, a traditional gathering
                        place for diverse Indigenous peoples including the Cree, Blackfoot, Métis, Nakota Sioux,
                        Iroquois, Dene, Ojibway / Saulteaux / Anishinaabe, Inuit, and many others whose histories,
                        languages, and cultures continue to influence our vibrant community. We acknowledge that we are
                        all treaty people and we are committed to equity and justice for all our relations.
                    </p>

                    <div className="footer__socials">
                        <a href="#">
                            <FacebookIcon/>
                        </a>
                        <a href="#">
                            <TwitterIcon/>
                        </a>
                        <a href="#">
                            <YoutubeIcon/>
                        </a>
                        <a href="#">
                            <InstagramIcon/>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
}