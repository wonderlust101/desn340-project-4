import "./SectionHero.scss";

type sectionHeroProps = {
    header: string;
    imageUrl: string;
    imagePosition?: string;
    imageAlt?: string;
}

export default function SectionHero({header, imageUrl, imagePosition, imageAlt}: sectionHeroProps) {

    return (
        <section className="section-hero grid-bleed">
            <h1 className="section-hero__header">{header}</h1>
            <img
                className="section-hero__image"
                style={{objectPosition: imagePosition}}
                src={imageUrl}
                alt={imageAlt}
                role="presentation"
            />
        </section>
    );
}
