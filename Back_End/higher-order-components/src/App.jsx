import Button from "./components/Button";
import ProvideContext from "./context/ProvideContext";
import withHoc from "./higherordercomponents/withHoc";
import LoginForm from "./pages/LoginForm";

const HOCButton = withHoc(Button)

const App = () => {

  const NormalAlert = () => {
    alert("Normal Button Alert")
  }

  return (
    <>
      <Button fun={NormalAlert} text={"NormalClick"} />
      <HOCButton />

      <ProvideContext>
        <LoginForm />
      </ProvideContext>
    </>
  )
}

export default App;

