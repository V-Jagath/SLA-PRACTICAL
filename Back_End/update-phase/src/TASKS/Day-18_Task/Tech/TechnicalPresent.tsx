const TechnicalPresent = ({ notes }: any) => {
    return (<>
        <div className="bg-gray-800 text-white h-auto">
            <h1 className="text-center p-2 text-3xl font-bold">Day 18 Notes Notes</h1>
            {notes.map((e: any, i: number) => (
                <div key={i} className="p-3">
                    <h1 className="font-bold text-2xl p-3">{e.title}</h1>
                    <p>{e.description}</p>

                    <div>{e.points.map((note: string, i: number) => (
                        <li className="ml-2 p-2" key={i}>{note}</li>
                    ))}</div>
                </div>
            ))}
        </div>
    </>)
};

export default TechnicalPresent;
