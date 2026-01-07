import Button from "../components/Button";

const HOCButton = Button

const HigherComponents = () => {

    const NormalAlert = () => {
        alert("Normal Button Alert")
    }
    
    const HOCAlert = () => {
        alert("It's HOC Button Alert")
    }

    return (<>
        <Button text={"Normal Button"} fun={NormalAlert} />
        <HOCButton text={"HOC Button"} fun={HOCAlert} />
    </>)

}
export default HigherComponents;
