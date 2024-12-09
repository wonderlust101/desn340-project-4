import {useEffect, useState} from "react";

import "./Hero.scss";

import heroImage from "/images/hero-image.png";

export default function Hero() {
    const [imageHeight, setImageHeight] = useState("100vh");

    useEffect(() => {
        const adjustImageHeight = () => {
            const isMobile = window.innerWidth <= 768;
            const header = document.querySelector("header") as HTMLElement | null;
            const textContainer = document.querySelector(".hero__text-container") as HTMLElement | null;

            const headerHeight = header?.offsetHeight || 0;
            const textHeight = textContainer?.offsetHeight || 0;

            if (isMobile) {
                setImageHeight(`min(40vh, calc(100vh - ${headerHeight + textHeight}px))`);
            }
            else {
                setImageHeight(`calc(100vh - ${headerHeight + textHeight + 16}px)`);
            }
        };

        window.addEventListener("load", adjustImageHeight);
        window.addEventListener("resize", adjustImageHeight);

        adjustImageHeight();

        return () => {
            window.removeEventListener("load", adjustImageHeight);
            window.removeEventListener("resize", adjustImageHeight);
        };
    }, []);

    return (
        <section className="hero grid-bleed">
            <img
                className="hero__image"
                src={heroImage}
                alt="Two people biking in Edmonton near the river valley."
                style={{height: imageHeight}}
            />

            <div className="hero__text-container grid-bleed">
                <h1 className="hero__text">
                    Whether you ride once a week or year-round,
                    <span className="hero__text--blue">Bike Edmonton </span>
                    gives you the tools to enjoy cycling.
                </h1>
            </div>
        </section>
    );
}