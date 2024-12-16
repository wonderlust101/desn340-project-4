import "./MoreInfo.scss";
import {useState} from "react";

export default function MoreInfo() {
    const [expandedSections, setExpandedSections] = useState<number[]>([]);

    const toggleSection = (index: number) => {
        setExpandedSections((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="more-info" id="more-info">
            {[
                {
                    header : "About our refurbished bikes",
                    content: (
                        <>
                                <p>Before purchasing our refurbished bikes, it is important to know that:</p>

                                <ul className="more-info__unordered-lists">
                                    <li>
                                        Available bikes are updated daily. We cannot reserve bikes, so your choices may
                                        be
                                        sold before your appointment. If that happens, we’ll do our best to suggest
                                        other
                                        options for you.
                                    </li>

                                    <li>
                                        Bikes are fully refurbished by professional mechanics. We prioritize function,
                                        so
                                        bikes may have appropriate, but aesthetically mismatched, parts. When you buy a
                                        bike
                                        from us, it will be genuinely one-of-a-kind!
                                    </li>

                                    <li>
                                        We are a non-profit serving the people of Edmonton and prioritize our services
                                        for
                                        Edmonton residents. If you are not a resident of Edmonton, we encourage you to
                                        look
                                        at private marketplaces and commercial bike shops rather than us.
                                    </li>

                                    <li>
                                        Bikes are like shoes: you can guess fit by size, but you should always try them
                                        out.
                                        We put a lot of love into our bikes, and we’re devoted to matching one with your
                                        needs. It’s why we insist that the intended rider is present to try the bike in
                                        person. We do not offer exchanges or refunds on used bicycles, so we want to
                                        make
                                        sure you and your bike are a great match.
                                    </li>

                                    <li>
                                        Bikes can be viewed in-person by appointment only. To book an appointment, view
                                        our
                                        bikes first and then use the “Book an Appointment” button.
                                    </li>

                                    <li>
                                        We accept debit, Visa, Mastercard, and cash.
                                    </li>
                                </ul>

                                <br/>

                                <p>
                                    As-Is Bikes. We have a limited number of as-is bikes (not refurbished) available at
                                    our
                                    workshop. These bikes may not be ready-to-ride and they may be missing parts. Only
                                    bikes
                                    explicitly marked as-is are available for sale.
                                </p>
                        </>
                    ),
                },
                {
                    header : "Bike shopping steps",
                    content: (
                        <>
                            <ol className="more-info__ordered-lists">
                                <li>
                                    To book an appointment, view our bikes first, and then use the “Book an Appointment”
                                    button. Be sure to tell us which bikes you are interested in.
                                </li>
                                <li>
                                    Select your top 3 bikes to test ride. Note the make, model, size, and colour. You
                                    can
                                    try out additional bikes if time permits.
                                </li>
                                <li>
                                    Only one rider can be fitted per appointment. Test rides happen outside so please be
                                    prepared for the weather.
                                </li>
                                <li>
                                    Please cancel your appointment if you cannot make it. No-shows without cancellation
                                    will receive lower priority and may be charged a booking fee for future
                                    appointments.
                                </li>
                                <li>
                                    The intended rider must be present for the bike fitting.
                                </li>
                            </ol>
                        </>
                    ),
                },
                {
                    header : "No Appointments Available?",
                    content: (
                        <>
                            <p>
                                We do bike shopping appointments on <span className="more-info--bold"> Wednesday & Thursday evenings</span> and <span
                                className="more-info--bold">Saturday & Sunday afternoons.</span> Available bike shopping
                                appointments appear no more than 48 hours before
                                those times.
                            </p>

                            <br/>

                            <p>
                                For example, available Saturday afternoon appointments appear on the calendar on
                                Thursday
                                afternoon. If you try to book an appointment more than 48 hours in advance, you will not
                                see
                                any available. We also only book appointments one day at a time, so Sunday appointments
                                will
                                not be available until after closing time on Saturday.
                            </p>
                        </>
                    ),
                },
            ].map((section, index) => (
                <div className="more-info__more-info-section grid-bleed" key={index}>
                    <div
                        className={`more-info__more-info-section-text ${expandedSections.includes(index) ? "expanded" : ""}`}
                    >
                        <h2 className="more-info__header">{section.header}</h2>
                        <div className={`more-info__content ${expandedSections.includes(index) ? "expanded" : ""}`}>
                            {section.content}
                        </div>
                    </div>

                    <p
                        className={`more-info__read ${expandedSections.includes(index) ? "expanded" : ""}`}

                        onClick={() => toggleSection(index)}
                    >
                        {expandedSections.includes(index) ? "Read less" : "Read more"}
                    </p>
                </div>
            ))}
        </div>
    );
}
