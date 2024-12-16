import {useState} from "react";

import "./FAQ.scss";

import dropDownArrow from "/src/assets/images/dropdown-icon.svg";

type question = {
    question: string;
    answer: string;
}

const questions: question[] = [
    {
        question: "What Repair Services Do You Offer?",
        answer  :
            "We currently offer 15 and 30 minute Repair Service (we do the work) as well as Do It Yourself (DIY) Service (you do the work) and Do It Together (DIT) Service. For more information on these services see the descriptions on our Repair Service Booking page and information on our DIY/DIT FAQ page."
    },
    {
        question: "What Is DIY/DIT Bike Repair?",
        answer  :
            "DIY (do-it-yourself) repair provides you with the tools, space and parts to do your own repairs and projects. It is great way to learn about bikes, develop your mechanical skills and save money, so long as you are motivated to do your own work. We only give very limited, hands-off guidance for DIY repairs." +
            "\n" +
            "DIT (do-it-together) repairs are for anyone wanting to learn about bike mechanics and work on their own bike, but need assistance. We can give you a little bit of help, or a lot of help, depending on what you need, but you are expected to be directly involved." +
            "\n"
    },
    {
        question: "What Parts Do You Have?",
        answer  :
            "All of our used parts are donated, so the selection varies. We have a very wide range of parts from many different types of bikes, including parts needed to make most bikes functional. Our supply of newer and higher-end used parts is generally limited."
    },
    {
        question: "What Type of Bikes Do You Have?",
        answer  :
            "Bikes are fully refurbished and checked by professional mechanics. We prioritize function, so bikes may have appropriate, but aesthetically mismatched parts. When you buy a bike from us, it will be genuinely one-of-a-kind!"
    },
    {
        question: "What Do Volunteers Do at the Shop?",
        answer  :
            "Our amazing volunteers are core to running our shops!\n" +
            "\n" +
            "Volunteers build & repair bikes, provide advice on bikes & cycling, sell parts, and help maintain the shop.\n" +
            "\n" +
            "Volunteers can work with the public, helping shop patrons fix their bikes, or greeting people and introducing them to the shop and helping with sales, or volunteers can also work behind the scenes: repairing and organizing. Whatever your comfort and interest, we have a place for you!" +
            "\n" +
            "Everyone is encouraged to help with all aspects of running the shops, and to help with special projects from time to time."
    },
    {
        question: "I Have a Bike to Donate. Can You Pick It Up?",
        answer  :
            "We generally don’t have the capacity to pick up donations. Exceptions may be made for larger or institutional donations. Please contact us at info@bikeedmonton.ca for more information."
    },
    {
        question: "Will you have the parts I need?",
        answer  :
            "We have most parts needed to repair most bikes. However we cannot guarantee we have all parts, especially if they are uncommon, higher end or newer parts. If you know you need a specific part please let us know in advance or indicate it when you book your appointment."
    },
    {
        question: "Do I Need an Appointment?",
        answer  :
            "Patrons with appointments for DIY/DIT work are prioritized. Please book only one DIY space per day. Walk-ins are allowed if there’s enough space, at the discretion of our volunteers. You may need to wait or come back another day if we are busy and you don’t have an appointment."
    },
    {
        question: "What Do Used Parts Cost?",
        answer  :
            "Bike Edmonton strives to make cycling accessible. We try to keep used parts prices affordable, while charging enough to be financially sustainable. The cost of used parts reflects their quality, condition and availability. Prices are ultimately at the discretion of staff and volunteers and are non-negotiable."
    },
    {
        question: "Do You Accept Returns or Trades on Parts?",
        answer  :
            "All used parts are sold on as-is basis and we cannot accept returns. Please look used parts over carefully before buying.\n" +
            "\n" +
            "Returns will be considered for new parts only if they are defective and promptly returned in new condition.\n" +
            "\n" +
            "We are not equipped to accept trades of any kind. This protects us from purchasing or receiving potentially stolen bikes and parts."
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>

            <div className="faq__accordian">
                {questions.map((item, index) => (
                    <div className="faq__question" key={index}>
                        <div className="faq__question-header" onClick={() => handleToggle(index)}>
                            <h3 className="faq__question-title">{index + 1}. {item.question}</h3>

                            <img
                                className={`faq__dropdown-icon ${activeIndex === index ? "rotate" : ""}`}
                                src={dropDownArrow}
                                alt="Toggle Answer"
                                role="presentation"
                            />
                        </div>

                        {activeIndex === index && (
                            <p
                                className="faq__answer"
                                dangerouslySetInnerHTML={{
                                    __html: item.answer.replace(/\n/g, "<br />"),
                                }}
                            ></p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}