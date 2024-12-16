import "./ProductHeader.scss";
import Button from "../../../components/Button";
import MoreInfoIcon from "../../../components/Icons/MoreInfoIcon";

type ProductHeaderProps = {
    setCurrentSize: (type: string) => void;
    currentSize: string;
};

export default function ProductHeader({setCurrentSize, currentSize}: ProductHeaderProps) {
    const bikeSizes:string[] = ["All", "Youth", "Small", "Medium", "Large"];

    return (
        <div className="product-header__top-section-buttons grid-bleed">
            <div className="product-header__carousel-content">
                <div className="product-header__bike-type-buttons">
                    {bikeSizes.map((size, index) => (
                        <Button
                            key={index}
                            variant={`button--white ${currentSize === `${size}` ? "active" : "inactive"}`}
                            onClick={() => setCurrentSize(size)}
                        >
                            {size} Bikes
                        </Button>
                    ))}
                </div>
            </div>

            <Button
                variant="button--black button--full-width product-header__more-info-button"
                location="#more-info"
            >
                <MoreInfoIcon/>
                More Info
            </Button>
        </div>
    );
}