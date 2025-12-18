const CommunicationPresent = ({ data }: any) => {

    return (<>
        <div className="bg-gray-800 h-110 text-white">

            <h1 className="text-2xl font-bold mb-4">Communication Component</h1>

            <div className="flex gap-6">
                {data.map((e: any, i: any) => (
                    <div key={i} className="w-80 h-50  text-black bg-amber-300 flex flex-col gap-5 p-3 rounded-lg shadow">
                        <p>Name : {e.name}</p>
                        <p>Sentence : {e.sentence}</p>
                        <p>Topic : {e.topic}</p>
                        <p>Taking Minutes : {e.mins}</p>
                    </div>
                ))}
            </div>
        </div>

    </>)
};

export default CommunicationPresent;
