{/* antigravity . */ }
import ArrayProcess from '../Components/ArrayProcess'
import ArrayofObject from '../Components/ArrayofObject'

const Day12 = () => {
    {/* Non Primitive Datatype */ }

    const Obj = { name: "React", year: 2025 }
    const nested_Obj = { project: { course: { java: "java", python: "python" }, fees: { java: 30000, python: 4000 } } }

    return (
        <>
            <h1 style={{ backgroundColor: "black", color: "white" }}>NON PRIMITIVE DATATYPES</h1>

            {/* 1. Object Rendering  */}
            <h1>{Obj.name}</h1>
            <h1>{Obj.year}</h1>

            <h1>Nested Object</h1>

            <h2>{nested_Obj.project.course.java}</h2>
            <h2>{nested_Obj.project?.fees.java}</h2>

            <ArrayProcess />
            <ArrayofObject />

        </>
    )
};


export default Day12;
