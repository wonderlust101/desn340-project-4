import "./Footer.scss";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import linksJSON from "../../data/siteLinks.json";

export default function Footer() {
    const links: Links[] = linksJSON;

    return (
        <footer className="footer grid-bleed">
            <section className="footer__container">
                <p className="footer__logo">Bike Edmonton</p>

                <div className="footer__content">
                    <div className="footer__main-section">
                        <div className="footer__contact">
                            <div>
                                <p className="footer__contact-text">PO Box 1819 Station Main</p>
                                <p className="footer__contact-text">Edmonton, Alberta</p>
                                <p className="footer__contact-text">T5J 2P2</p>
                            </div>

                            <p className="footer__contact-text">+ 1 780 433-2453</p>

                            <p className="footer__contact-text">info@bikeedmonton.ca</p>
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

                    <p className="footer__acknowledgement">
                        Bike Edmonton acknowledges that we are located on Treaty 6 territory, a traditional gathering
                        place for diverse Indigenous peoples including the Cree, Blackfoot, Métis, Nakota Sioux,
                        Iroquois, Dene, Ojibway / Saulteaux / Anishinaabe, Inuit, and many others whose histories,
                        languages, and cultures continue to influence our vibrant community. We acknowledge that we are
                        all treaty people and we are committed to equity and justice for all our relations.
                    </p>

                    <div className="footer__socials">
                        <a
                            href="#"
                            aria-label="Go to Facebook Page"
                        >
                            <FacebookIcon/>
                        </a>
                        <a
                            href="#"
                            aria-label="Go to Twitter Page"
                        >
                            <TwitterIcon/>
                        </a>
                        <a
                            href="#"
                            aria-label="Go to Youtube Page"
                        >
                            <YoutubeIcon/>
                        </a>
                        <a
                            href="#"
                            aria-label="Go to Instagram Page"
                        >
                            <InstagramIcon/>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
}