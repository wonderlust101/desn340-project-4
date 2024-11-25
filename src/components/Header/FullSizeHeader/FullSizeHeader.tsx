import './FullSizeHeader.scss'

type link = {
    location: string;
    href: string;
}

type headerMenuProps = {
    links: link[];
}

export default function FullSizeHeader({links}: headerMenuProps) {

    return (
        <nav className="fullSizeHeader__nav">
            <ul className="fullSizeHeader__links">
                {links.map((link) => (
                    <li key={link.location}>
                        <a  href={link.href} aria-label={"Go to " + link.location + " Page"}>
                            {link.location}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}