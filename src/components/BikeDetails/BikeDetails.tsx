import "./BikeDetails.scss";
import Button from "../Button";

type bikeDetailsProps = {
    imgURL: string;
    name: string;
    type: string;
    price: number;
    content: string;
    showQuickView: boolean;
}

export default function BikeDetails({imgURL, name, type, price, content, showQuickView}:bikeDetailsProps) {

    return (
        <section className="bike-details">
            <img className="bike-details__img" src={imgURL} alt=""/>

            <div className="bike-details__details">
                <div className="bike-details__content">
                    <div className="bike-details__title">
                        <h3>{name}</h3>

                        <p className="bike-details__bike-type">{type}</p>
                    </div>

                    <p className="bike-details__price">CAD ${price}</p>

                    <p className="bike-details__text">
                        {content}
                    </p>
                </div>

                <Button variant="button--blue button--full-width">View Details</Button>
                {showQuickView && <Button variant="button--black button--full-width">Quick View</Button>}
            </div>
        </section>
    );
}