const ButtonClick = () => {
    let count: number = 0;

    const OnClick = () => {
        count = count + 1

        console.log(count)
    };

    const DblClick = () => {
        count = count + 1
        console.log(count)
    }

    const OnChange = (e: any) => {
        console.log(e.target.value);
    };


    // const OnSubmit = () => {

    // }

    // const MouseEnter = () => {

    // }

    // const MouseLeave = () => {

    // }

    // const MouseDown = () => {

    // }

    // const MouseUp = () => {

    // }


    return (<>
        <div>
            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>1. onClick</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={OnClick}>OnClick</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>2. onChange</h1>
                <div>
                    <input type="text" onChange={OnChange} className="bg-white p-1 text-black" />
                    <button className="p-1 bg-green-600 rounded " >OnChange</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>3. OnSubmit</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={OnSubmit}>onSubmit</button>
                </div>
            </div>

            {/*<div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>5. mouseEnter</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={MouseEnter}>mouseEnter</button>
                </div>
            </div>
            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>6. MouseLeave</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={MouseLeave}>mouseLeave</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>7. MouseUp</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={MouseUp}>mouseUp</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>8. MouseDown</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={MouseDown}>mouseDown</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>9. DblClick</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={DblClick}>dblClick</button>
                </div>
            </div> */}
        </div>
    </>)
};

export default ButtonClick;
