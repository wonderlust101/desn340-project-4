import "./AboutUs.scss";

import aboutUsImage from "/images/about-us.png";

export default function AboutUs() {
    return (
        <section className="about-us">
            <h2 className='about-us__header'>About Us</h2>

            <div className='about-us__content'>
                <div className='about-us__text-column'>
                    <div>
                        <h3>Our vision...</h3>
                        <p>is a city where cycling is safe, widespread, and accessible to people of all comfort levels.</p>
                    </div>
                    
                    <div>
                        <h3>Our work...</h3>
                        <p>has supported funding for the Bike Plan, bike lane construction, and programs that give people resources they need to ride.</p>
                    </div>
                    
                    <div>
                        <h3>We have helped...</h3>
                        <p>thousands of people find a bike to ride and learn to fix their bike. Your financial support makes it possible for us to keep doing this work!</p>
                    </div>
                </div>
                
                <img 
                    className='about-us__img' 
                    src={aboutUsImage} 
                    alt="Two women biking on a road within the city of Edmonton."
                />
            </div>

        </section>
    );
}