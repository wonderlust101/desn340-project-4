import {useEffect, useRef, useState} from "react";
import "./BikeShopProducts.scss";
import BikeDetails from "./BikeDetails";
import leftArrowIcon from "/src/assets/images/left-arrow.svg";
import rightArrowIcon from "/src/assets/images/right-arrow.svg";
import filterIcon from "/src/assets/images/filter-icon.svg";

type BikeShopProductsProps = {
    bikeList: Bike[];
    currentSize: string;
};

export default function BikeShopProducts({bikeList, currentSize}: BikeShopProductsProps) {
    const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const currentBikes: Bike[] = filteredBikes.slice(startIndex, startIndex + itemsPerPage);
    const totalPages: number = Math.ceil(filteredBikes.length / itemsPerPage);
    
    const shopSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const filtered = bikeList.filter(bike =>
            !currentSize || currentSize === "All" || bike.size === currentSize
        );
        setFilteredBikes(filtered);
        setCurrentPage(1);
    }, [currentSize, bikeList]);
    
    const scrollToTop = () => {
        if (shopSectionRef.current) {
            shopSectionRef.current.scrollIntoView({behavior: "smooth"});
        }
    };

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth >= 1280) {
                setItemsPerPage(9);
            } else if (window.innerWidth >= 864) {
                setItemsPerPage(8);
            } else {
                setItemsPerPage(6);
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);
    
    const goToNextPage = () => {
        setCurrentPage((prev) => {
            const newPage = Math.min(prev + 1, totalPages);
            scrollToTop();
            return newPage;
        });
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => {
            const newPage = Math.max(prev - 1, 1);
            scrollToTop();
            return newPage;
        });
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    return (
        <div ref={shopSectionRef} className="bike-shop-products__products">
            <div className="bike-shop-products__product-header">
                <div className="bike-shop-products__filter">
                    <img src={filterIcon} alt="Filter Icon"/>
                    <p className="bike-shop-products__product-header-text">Show Filters</p>
                </div>
                <p className="bike-shop-products__product-header-text">
                    <span className="bike-shop-products__product-header-text--blue">
                        {bikeList.length}
                    </span>{" "}
                    Bikes Available
                </p>
            </div>

            <div className="bike-shop-products__products-grid">
                {currentBikes.map((bike, index) => (
                    <BikeDetails
                        key={index}
                        imgURL={bike.imgURL}
                        name={bike.name}
                        type={bike.type}
                        size={bike.size}
                        price={bike.price}
                        content={bike.content}
                        asIs={bike.asIs}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="bike-shop-products__pagination">
                <img
                    className="bike-shop-products__pagination-arrow"
                    src={leftArrowIcon}
                    alt="Previous Page"
                    onClick={goToPreviousPage}
                />

                <div className="bike-shop-products__pagination-numbers">
                    {Array.from({length: totalPages}, (_, index) => (
                        <p
                            key={index}
                            className={`bike-shop-products__pagination-number ${
                                currentPage === index + 1 ? "active" : ""
                            }`}
                            onClick={() => goToPage(index + 1)}
                        >
                            {index + 1}
                        </p>
                    ))}
                </div>

                <img
                    className="bike-shop-products__pagination-arrow"
                    src={rightArrowIcon}
                    alt="Next Page"
                    onClick={goToNextPage}
                />
            </div>
        </div>
    );
}
