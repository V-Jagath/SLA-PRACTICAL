import Button from "./components/Button";
import ProvideContext from "./context/ProvideContext";
import withHoc from "./higherordercomponents/withHoc";
import LoginForm from "./pages/LoginForm";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import { useState } from "react";
import UseMemo from "./pages/UseMemo";

const HOCButton = withHoc(Button)

const HOCInput = withHoc(Input)
const App = () => {

  const [inputData, setInputData] = useState()

  const NormalAlert = () => {
    alert("Normal Button Alert")
  }

  const getInput = (e) => {
    setInputData(e.target.value)
    console.log(inputData)
  }

  return (
    <>
      <Navbar />
      <Button fun={NormalAlert} text={"NormalClick"} />
      <HOCButton />
      <Input inputFun={getInput} />
      <HOCInput />
      <UseMemo />
      <ProvideContext>
        <LoginForm />
      </ProvideContext>

    </>
  )
}

export default App;

