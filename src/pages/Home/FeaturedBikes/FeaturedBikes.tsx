import "./FeaturedBikes.scss";
import BikeDetails from "../../../components/BikeDetails";
import Button from "../../../components/Button";
import bikesJson from "../../../data/bikes.json";

const bikes: Bike[] = bikesJson;

export default function FeaturedBikes() {

    return (
        <section className="featured-bikes">
            <h2 className="featured-bikes__header">Featured Bikes</h2>

            <div className="featured-bikes__content">
                <div className="featured-bikes__carousel">
                    <div className="featured-bikes__carousel-content">
                        {bikes.map((bikes, index) => (
                            <BikeDetails
                                key={index}
                                imgURL={bikes.imgURL}
                                name={bikes.name}
                                type={bikes.type}
                                price={bikes.price}
                                content={bikes.content}
                                showQuickView={false}
                            />

                        ))}
                        
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
