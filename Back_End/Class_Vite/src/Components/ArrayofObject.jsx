const ArrayofObject = () => {

    const skills = [{ name: "React", year: 2025 }, { name: "Node", year: 2024 }];

    return (
        <>
            <div>
                <h3>3. Array of Object Rendering</h3>
                {skills.map((e, i) => (
                    <p key={i}>  Array ofObject {i + 1}. {e.name} and {e.year}</p>
                ))}
            </div>
        </>
    )

};
export default ArrayofObject;
