import './FullSizeHeader.scss'

type headerMenuProps = {
    links: Links[];
}

export default function FullSizeHeader({links}: headerMenuProps) {

    return (
        <nav className="fullSizeHeader__nav">
            <ul className="fullSizeHeader__links">
                {links.map((link) => (
                    <li key={link.header}>
                        <a  href={link.href} aria-label={"Go to " + link.header + " Page"}>
                            {link.header}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}