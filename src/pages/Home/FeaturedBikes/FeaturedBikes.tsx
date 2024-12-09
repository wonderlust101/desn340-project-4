import "./FeaturedBikes.scss";
import BikeDetails from "../../../components/BikeDetails";
import Button from "../../../components/Button";

export default function FeaturedBikes() {

    return (
        <section className="featured-bikes">
            <h2 className="featured-bikes__header">Featured Bikes</h2>

            <div className="featured-bikes__content">
                <div className="featured-bikes__carousel">
                    <div className="featured-bikes__carousel-content">
                        <BikeDetails/>
                        <BikeDetails/>
                        <BikeDetails/>
                        <BikeDetails/>
                        <BikeDetails/>
                        <BikeDetails/>
                        <section className="latest-blog__view-all">
                            <h2>View All</h2>
                            <Button variant="button--white">View Used Bike Shop</Button>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
