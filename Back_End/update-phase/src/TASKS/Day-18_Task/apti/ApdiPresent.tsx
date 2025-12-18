const AptiPresent = ({ question }: any) => {

    console.log(question)
    return (<>

        <div className="bg-gray-800 text-white h-auto">
            {question.map((e: any, i: number) => (
                <div key={i}>
                    <h1 className="text-xl p-2">{e.quesNo}.{e.question}</h1>
                    <div className="p-3">
                        <p>a.{e.option.a}</p>
                        <p>b.{e.option.b}</p>
                        <p>c.{e.option.c}</p>
                        <p>d.{e.option.d}</p>
                    </div>
                </div>
            ))}
        </div>
    </>)
};

export default AptiPresent;