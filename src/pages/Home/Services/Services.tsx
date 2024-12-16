import "./Services.scss";

import facilityBookingsImage from "/images/facility-bookings.webp";
import lunchAndLearnImage from "/images/lunch-and-learn.webp";
import rentAMechImage from "/images/rent-a-mechanic.webp";
import bikeGeneratorImage from "/images/bike-generator-rental.webp";
import bikeRackImage from "/images/bike-rack.webp";

export default function Services() {
    return (
        <section className="services">
            <h2 className="services__header">Our Services</h2>

            <div className="services__grid">
                <section>
                    <img 
                        src={facilityBookingsImage} 
                        alt="The interior of the facility in downtown Edmonton."
                    />

                    <h3>Facility Bookings</h3>
                </section>

                <hr className="services__divider"/>

                <section>
                    <img src={lunchAndLearnImage}
                         alt="A group of people participating in a presentation of bike repairs."
                    />

                    <h3>Lunch and Learn Presentation</h3>
                </section>

                <hr className="services__divider"/>

                <section>
                    <img 
                        src={rentAMechImage} 
                        alt="A mechanic working on a bike outside of the shop."/>

                    <h3>Rent A Mechanic</h3>
                </section>

                <hr className="services__divider"/>

                <section>
                    <img 
                        src={bikeGeneratorImage} 
                        alt="A woman squatting beside some bikes."
                    />

                    <h3>Bike Generator Rental</h3>
                </section>

                <hr className="services__divider"/>

                <section>
                    <img 
                        src={bikeRackImage} 
                        alt="A bike rack found in a park in Edmonton."
                    />

                    <h3>Bike Rack Sale and Rental</h3>
                </section>
            </div>
        </section>
    );
}