import "./FAQ.scss";

type question = {
    question: string;
    answer: string;
}

const questions: question[] = [
    {
        question: "What Repair Services Do You Offer?",
        answer  : "test"
    },
    {
        question: "What Is DIY/DIT Bike Repair?",
        answer  : "test"
    },
    {
        question: "What Parts Do You Have?",
        answer  : "test"
    },
    {
        question: "What Type of Bikes Do You Have?",
        answer  : "test"
    },
    {
        question: "What Do Volunteers Do at the Shop?",
        answer  : "test"
    },
    {
        question: "I Have a Bike to Donate. Can You Pick It Up?",
        answer  : "test"
    },
    {
        question: "What Repair Can You Not Do?",
        answer  : "test"
    },
    {
        question: "Do I Need an Appointment?",
        answer  : "test"
    },
    {
        question: "What Do Used Parts Cost?",
        answer  : "test"
    },
    {
        question: "Do You Accept Returns or Trades on Parts?",
        answer  : "test"
    },
];

export default function FAQ() {

    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>

            <div>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h3>{question.question}</h3>
                    </div>
                ))}
            </div>

        </section>
    );
}