
const Resume = () => {

    const userData: User[] = [
        { name: "Jagath", img: "src/assets/LinkedIn Profile .png", Education: { degree: "Msc CS", passedOut: 2025, college: "Muthurangam Govt Arts College Vellore" }, company: { companyName: "Tata", DOJ: "04.2025" }, skill: { frontEnd: { structure: "Html", style: "css", frameWork: "Tailwind", library: "React" }, backEnd: { DataHandle: "Node", ml: "python" } } },

        { name: "Suriya", img: "../assets/LinkedIn Profile .png", Education: { degree: "Msc CS", passedOut: 2025 }, company: { companyName: "Tata", DOJ: "04.2025" }, skill: { frontEnd: { structure: "Html", style: "css", frameWork: "Tailwind", library: "React" }, backEnd: { DataHandle: "Node", ml: "python" } } },

        { name: "Jagath", img: "../assets/LinkedIn Profile .png", Education: { degree: "Msc CS", passedOut: 2025 }, company: { companyName: "Tata", DOJ: "04.2025" }, skill: { frontEnd: { structure: "Html", style: "css", frameWork: "Tailwind", library: "React" }, backEnd: { DataHandle: "Node", ml: "python" } } }
    ];

    interface User {
        name: string,
        img: string,
        Education: {
            degree: string;
            passedOut: number;
            college?: string
        },
        company: {
            companyName: string,
            DOJ: string;
        },
        skill: {
            frontEnd: {
                structure: string,
                style: string,
                frameWork: string,
                library: string,
            }
            backEnd: {
                DataHandle: string,
                ml: string
            }
        },

    }


    return (
        <>

            <h1>Resume Profile</h1>
            {userData.map((e, i) => (

                <div key={i} style={{ background: "black", color: "white" }}>
                    <h4>{e.name}</h4>
                    <img style={{ width: "150px", height: "150px", borderRadius: "50%" }} src={e.img} alt="" />

                    <h3>Education Details</h3>
                    <p>i am Completed {e.Education.degree} in {e.Education.passedOut} from {e.Education.college}</p>

                    <h3>Company Details</h3>
                    <p>I am Worked in{e.company.companyName} for last 3 years and my Date of Joining is {e.company.DOJ}</p>

                    <h3>My Skills</h3>
                    <p>I have strong knowledge of front end like {e.skill.frontEnd.structure},{e.skill.frontEnd.style},{e.skill.frontEnd.frameWork},{e.skill.frontEnd.library} and backend technologies {e.skill.backEnd.DataHandle},{e.skill.backEnd.ml}</p>
                </div>
            ))};
        </>
    )
};

export default Resume;
