import ProvideContext from "./context/ProvideContext";
import HigherComponents from "./higherordercomponents/HigherComponents";
import LoginForm from "./pages/LoginForm";

const App = () => {
  return (
    <>
      <HigherComponents />

      <ProvideContext>
        <LoginForm />
      </ProvideContext>
    </>
  )
}

export default App;

