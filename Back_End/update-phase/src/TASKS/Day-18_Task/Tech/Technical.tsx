import TechnicalPresent from "./TechnicalPresent"

interface Notes {
    title: string,
    description: string,
    points: Array<string>
}

const Day18ClassNotes: Notes = [
    {
        title: "Props",
        description:
            "Props (Properties) are used to pass data from parent component to child component.",
        points: [
            "Parent to child data transfer",
            "Supports primitive and non-primitive data",
            "Props are immutable (read-only)",
            "Child components cannot modify props"
        ]
    },
    {
        title: "Multi Component & Component Tree",
        description:
            "React applications are built using multiple small reusable components instead of a single large file.",
        points: [
            "App is divided into reusable components",
            "Forms a component tree structure",
            "Improves maintainability and scalability"
        ]
    },
    {
        title: "Container vs Presentational Components",
        description:
            "Separation of logic and UI for clean architecture.",
        points: [
            "Container handles state, logic, API calls",
            "Presentational handles only UI",
            "Data is passed via props"
        ]
    },
    {
        title: "useState and Props (ES6+)",
        description:
            "useState is used for interaction and state management, while props are used for data sharing.",
        points: [
            "useState is used only where interaction is needed",
            "Props are used to display data",
            "State change triggers re-render"
        ]
    },
    {
        title: "Purpose of Props",
        description:
            "Props help in building reusable and clean components.",
        points: [
            "Reusable components",
            "Clean and readable code",
            "One-way data flow"
        ]
    },
    {
        title: "Props Immutability",
        description:
            "Props cannot be modified by child components.",
        points: [
            "Only parent can change data",
            "Keeps application predictable",
            "Prevents unexpected bugs"
        ]
    },
    {
        title: "Props Drilling",
        description:
            "Passing the same state through multiple components.",
        points: [
            "Not an error but a bad practice in large apps",
            "Makes code hard to maintain",
            "Solved using Context API or state management libraries"
        ]
    }
];




const Technical = () => {
    return (<>
        <TechnicalPresent notes={Day18ClassNotes} />
    </>
    )
};

export default Technical;
