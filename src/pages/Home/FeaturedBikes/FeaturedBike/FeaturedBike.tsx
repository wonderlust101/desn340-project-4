import "./FeaturedBike.scss";
import Button from "../../../../components/Button";

type bikeDetailsProps = {
    imgURL: string;
    name: string;
    type: string;
    price: number;
    content: string;
}

export default function FeaturedBike({imgURL, name, type, price, content}: bikeDetailsProps) {

    return (
        <section className={`featured-bike`}>
            <img 
                className="bike-details__img" 
                src={imgURL} 
                alt={`A ${type} bike called the ${name} for $${price}.`}
            />

            <div className="featured-bike__details">
                <div className="featured-bike__content">
                    <div className="featured-bike__title">
                        <h3>{name}</h3>

                        <p className="featured-bike__bike-type">{type}</p>
                    </div>

                    <p className="featured-bike__price">CAD ${price}</p>

                    <p className="featured-bike__text">
                        {content}
                    </p>
                </div>
                
                <Button variant="button--blue button--full-width">View Details</Button>
            </div>
        </section>
    );
}