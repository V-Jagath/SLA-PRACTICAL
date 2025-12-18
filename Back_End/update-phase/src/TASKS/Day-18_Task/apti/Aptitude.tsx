import AptiPresent from "./ApdiPresent";

const Aptitude = () => {

    interface ques {
        quesNo: number,
        question: string,
        option: {
            a: string,
            b: string,
            c: string,
            d: string
        }
    }

    const Questions: ques[] = [
        {
            quesNo: 1, question: "What is the next number in the series? 2, 6, 12, 20, ?",
            option: { a: "28", b: "30", c: "32", d: "34" }
        },
        {
            quesNo: 2, question: "A number is increased by 20% and then decreased by 20%. What is the net change?",
            option: { a: "No change", b: "2% increase", c: "4% decrease", d: "5% decrease" }
        },
        {
            quesNo: 3, question: "If 5 men can complete a work in 12 days, how many days will 10 men take to complete the same work?",
            option: { a: "3 days", b: "5 days", c: "6 days", d: "12 days" }
        },
        {
            quesNo: 4, question: "A shopkeeper buys an article for ₹800 and sells it for ₹920. What is the profit percentage?",
            option: { a: "10%", b: "12%", c: "15%", d: "18%" }
        },
    ];

    return (<>
        <AptiPresent question={Questions} />
    </>)
};

export default Aptitude