const Day11Task = () => {

    const box: boolean = true;
    const number: number = 31;

    const value: any = 0;

    const color: string = "yellow";

    const heroName = "Jagath";
    const companyName = "Tata"

    const getProject = true;


    return (
        <>
            {/* Task - 1 Hide and Show Box */}

            {box && <div style={{ backgroundColor: "black", color: "white", padding: "10px", width: "100px", height: "100px", textAlign: "center", marginBottom: "30px" }}>
                <p>This is Box</p>
            </div>}

            {/* 2. Hide and show text */}

            {box ? "Show" : "Hide"}

            {/* 3. odd or even 2 or 3  */}

            {number % 2 === 0 ? `${number} is Even Number` : `${number} is Odd Number`}

            {/* 4. truthy and false value button */}

            {value ? <button style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none" }}>Truthy Value</button> :
                <button style={{ padding: "10px", backgroundColor: "red", color: "white", border: "none" }}>Falsy Value</button>
            }

            {/* 5. green - go
                red - stop
                yellow - ready  */}

            {color === "red" && <button style={{ backgroundColor: "red", border: "none", padding: "20px", fontWeight: "bold", color: "white" }}>Stop</button>}
            {color === "yellow" && <button style={{ backgroundColor: "yellow", border: "none", padding: "20px", fontWeight: "bold" }}>Ready</button>}
            {color === "green" && <button style={{ backgroundColor: "green", border: "none", padding: "20px", fontWeight: "bold", color: "white" }}>Go</button>}


            {/* 6. value undefined nullesh value return */}

            {value ?? "The value is undefined or null"}

            {/* 7. Own Story */}

            {getProject ?
                <p>
                    <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> joined <span style={{ backgroundColor: "red", fontWeight: "bolder" }}>{companyName}</span> as a junior software developer.
                    After a few months, the <span style={{ color: "red", fontWeight: "bolder" }}>{companyName}</span> announced a big project. Many employees wanted it, but <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> also applied confidently.

                    IF <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> gets the project…

                    <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> works with full focus at <span style={{ backgroundColor: "red", fontWeight: "bolder" }}>{companyName}</span>. He spends extra hours understanding requirements, helping teammates, and improving the design. His coding is clean and efficient. After successful testing, the product is launched.
                    The client appreciates the work and sends positive feedback. The manager calls <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> to the conference room and congratulates him in front of everyone.
                    <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> earns a promotion and becomes a mentor for new joiners at Phoenix Tech <span style={{ backgroundColor: "red", fontWeight: "bolder" }}>{companyName}</span></p> :

                <p>
                    <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> doesn’t get the project…

                    He feels disappointed but doesn’t stop learning. <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> requests feedback from seniors, practices new technologies, and supports the team in smaller tasks.
                    One day, another urgent project arrives at . Because <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> has been learning consistently, he solves problems faster than others.
                    The manager notices his growth and gives him a chance to lead a mini project. <span style={{ fontWeight: "bold", color: "green" }}>{heroName}</span> succeeds and wins the respect of everyone.
                    Even though he didn’t get the first project, <span>{heroName}</span> becomes an important contributor at <span style={{ backgroundColor: "red", fontWeight: "bolder" }}>{companyName}</span>.
                </p>

            }
        </>
    )

};

export default Day11Task;
