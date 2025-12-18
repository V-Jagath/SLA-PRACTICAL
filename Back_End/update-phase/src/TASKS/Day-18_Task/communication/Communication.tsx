import CommunicationPresent from "./CommunicationPresent";

interface clsTask {
    sentence: string;
    name: string;
    topic: string;
    mins: number;
}

const Communication = () => {

    const Task: clsTask[] = [
        {
            sentence: "I speacking About Educaiton",
            name: "Sunil Kumar",
            topic: "Education",
            mins: 5
        },
        {
            sentence: "I am Speacking About Nature",
            name: "Naresh",
            topic: "Nature",
            mins: 6
        },
        {
            sentence: "I am Speacking about IT Sector",
            name: "Suriya",
            topic: "JavaScript",
            mins: 15
        }
    ];

    return (<>
        <CommunicationPresent data={Task} />
    </>)
};

export default Communication;
