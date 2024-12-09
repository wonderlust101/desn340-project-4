import "./Services.scss";

import facilityBookingsImage from "/images/facility-bookings.png";
import lunchAndLearnImage from "/images/lunch-and-learn.webp";
import rentAMechImage from "/images/rent-a-mechanic.png";
import bikeGeneratorImage from "/images/bike-generator-rental.png";
import bikeRackImage from "/images/bike-rack.png";

export default function Services() {
    return (
        <section className="services">
            <h2 className='services__header'>Our Services</h2>

            <div className='services__grid'>
                <div>
                    <img src={facilityBookingsImage} alt=""/>

                    <h3>Facility Bookings</h3>
                </div>

                <hr className='services__divider'/>

                <div>
                    <img src={lunchAndLearnImage} alt=""/>

                    <h3>Lunch and Learn Presentation</h3>
                </div>

                <hr className='services__divider'/>

                <div>
                    <img src={rentAMechImage} alt=""/>

                    <h3>Rent A Mechanic</h3>
                </div>

                <hr className='services__divider'/>

                <div>
                    <img src={bikeGeneratorImage} alt=""/>

                    <h3>Bike Generator Rental</h3>
                </div>
                
                <hr className='services__divider'/>

                <div>
                    <img src={bikeRackImage} alt=""/>

                    <h3>Bike Rack Sale and Rental</h3>
                </div>
            </div>
        </section>
    );
}