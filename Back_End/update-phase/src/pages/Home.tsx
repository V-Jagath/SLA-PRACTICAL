const Home = () => {
    return (<>
        <div className="h-110 bg-gray-300 flex flex-col gap-5" >
            <div>
                <h1 className="text-3xl font-bold">Home Page </h1>
            </div>
            <div>
                <h1 className="text-xl font-bold">Human and Webpage Interaction</h1>
                <p>Human–webpage interaction means how a user communicates with a webpage using actions like clicking, typing, or moving the mouse. These actions are handled in JavaScript using Events.</p>
            </div>
            <div>
                <h1 className="text-xl font-bold">Common User Interactions</h1>
                <ol>
                    <li>1. Button Click</li>
                    <li>2. Typing in Input Field</li>
                    <li>3. Form Submit</li>
                    <li>4. Mouse Movement</li>
                    <li>5. Keyboard Press</li>
                </ol>
            </div>
        </div>
    </>)
};

export default Home;
