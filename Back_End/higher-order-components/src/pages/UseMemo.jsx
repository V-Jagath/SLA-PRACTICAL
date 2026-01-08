import { useState } from "react";

const UseMemo = () => {
    const [num, setNum] = useState()

    const getInput = (e) => {
        setNum(e.target.value)
        doubleNumber(num)
    }


    return (
        <>
            <div>
                <input onChange={getInput} type="number" />
            </div>
        </>
    )
}

export default UseMemo;

const doubleNumber = (num) => {
    for (let i = 0; i < 1000; i++) {
        console.log(num)
    }
};
