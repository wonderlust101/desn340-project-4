import "./Hero.scss";
import heroImage from '/src/assets/images/hero-image.png';

export default function Hero() {
    return (
        <section>
            <img src={heroImage} alt=""/>
        </section>
    );
}