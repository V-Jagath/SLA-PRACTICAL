const Day11 = () => {

    const projectTitle = "HR"
    const location = "Chennai"
    const company = "TCS"

    const isActive = false;

    const number = 2
    const year = 2025

    return (
        <>
            <p>My project name is{projectTitle}This is very effactive so we will doing
                project by{company} location :{location} year -{year}
            </p>

            {isActive ? <h1>TRUE</h1> : "FALSE"}

            {/* Optional Rendering */}

            {isActive && "TRUE"}

            {number === 2 ? "even" : "odd"}
        </>
    )
}

export default Day11;
