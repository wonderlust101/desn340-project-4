import "./BikeDetails.scss";
import Button from "../../../../components/Button";

type bikeDetailsProps = {
    imgURL: string;
    name: string;
    type: string;
    size: string;
    price: number;
    content: string;
    asIs: boolean;
}

export default function BikeDetails({imgURL, name, type, size, price, content, asIs}: bikeDetailsProps) {

    return (
        <section className="bike-details">
            <img 
                className="bike-details__img" 
                src={imgURL}
                alt={`A ${type} bike called the ${name} for $${price}.`}
            />

            <div className="bike-details__details">
                <div className="bike-details__content">
                    <div className="bike-details__title">
                        <h3>{name}</h3>

                        <p className="bike-details__bike-type">{asIs && `As-Is`} {size} {type}</p>
                    </div>

                    <p className="bike-details__price">CAD ${price}</p>

                    <p className="bike-details__text">
                        {content}
                    </p>
                </div>

                <div className='bike-details__buttons'>
                    <Button variant="button--blue button--full-width">View Details</Button>
                    <Button variant="button--black button--full-width">Quick View</Button>
                </div>
            </div>
        </section>
    );
}