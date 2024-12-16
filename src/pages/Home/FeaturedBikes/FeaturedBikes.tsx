import "./FeaturedBikes.scss";
import Button from "../../../components/Button";
import FeaturedBike from "./FeaturedBike";
import bikesJson from "../../../data/bikes.json";
import Carousel from "../../../components/Carousel";

export default function FeaturedBikes() {
    const bikes: Bike[] = bikesJson;
    const featuredBikesNum: number = 6;

    return (
        <section className="featured-bikes">
            <h2 className="featured-bikes__header">Featured Bikes</h2>

            <Carousel
                itemCount={featuredBikesNum + 1}
                itemWidth={30}
            >
                {bikes.slice(0, featuredBikesNum).map((bike, index) => (
                    <FeaturedBike
                        key={index}
                        imgURL={bike.imgURL}
                        name={bike.name}
                        type={bike.type}
                        price={bike.price}
                        content={bike.content}
                    />
                ))}

                <section className="featured-bikes__view-all">
                    <h3 className="featured-bikes__view-all-header">View All</h3>
                    <Button variant="button--white" location="bike-shop">View Used Bike Shop</Button>
                </section>
            </Carousel>
        </section>
    );
}
