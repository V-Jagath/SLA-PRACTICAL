const ArrayProcess = () => {

    const skill = ["html", "css", "js", "ts"];

    return (
        <>
            <div>
                <h3>2. Array Rendering</h3>
                {skill.map((e, i) => (
                    <p key={i}> {i + 1}. {e.charAt()}</p>
                ))}
            </div>
        </>
    )

};
export default ArrayProcess;
