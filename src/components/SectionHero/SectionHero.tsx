import "./SectionHero.scss";
import sectionHero from "/images/used-bike-shop-hero.png";

type sectionHeroProps = {
    header: string;
}

export default function SectionHero({header}:sectionHeroProps) {
    
    return (
        <section className="section-hero">
            <h1 className='section-hero__header'>{header}</h1>
            <img className='section-hero__image' src={sectionHero} alt=""/>
        </section>
    );
}
