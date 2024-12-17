import React, {useEffect, useRef, useState} from "react";
import "./Carousel.scss";

type carouselProps = {
    children?: React.ReactNode;
    itemCount: number;
    itemWidth: number;
}

export default function Carousel({children, itemCount, itemWidth}: carouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [gridColumns, setGridColumns] = useState<string>("repeat(7, calc(100vw - 8rem))");

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 864) {
                setGridColumns(`repeat(${itemCount}, ${itemWidth}rem)`);
            } else {
                setGridColumns("repeat(7, calc(100vw - 8rem))");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [itemCount, itemWidth]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || 
            !carouselRef.current) return;
        e.preventDefault();
        
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX);
        
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
        >
            <div
                className="carousel__grid"
                style={{ gridTemplateColumns: gridColumns }}
            >
                {children}
            </div>
        </div>
    );
}