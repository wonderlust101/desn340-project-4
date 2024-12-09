import "./BikeDetails.scss";
import bikeImage from "/images/bikes/featured-bike.png";
import Button from "../Button";

export default function BikeDetails() {

    return (
        <section className="bike-details">
            <img className="bike-details__img" src={bikeImage} alt=""/>

            <div className="bike-details__details">
                <div className="bike-details__content">
                    <div className="bike-details__title">
                        <h3>Norco Multi Track</h3>

                        <p className="bike-details__bike-type">Hybird</p>
                    </div>

                    <p className="bike-details__price">CAD $390</p>

                    <p className="bike-details__text">
                        This hybrid will make a good 4 season commuter for someone looking for a bike that can be
                        economically maintained. Features thumb shifters for maximum ease of shifting with mittens, a
                        riser stem for a natural feeling riding position, and a body geometry saddle that will keep you
                        astride for hours. One of the best examples of stripped down utility on two wheels you'll find.
                    </p>
                </div>

                <Button variant="button--blue button--full-width">View Details</Button>
            </div>
        </section>
    );
}