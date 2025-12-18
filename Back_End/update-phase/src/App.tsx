import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Intraction from "./pages/Intraction";
import State from "./components/State";
import Day18Task from "./TASKS/Day-18_Task/Day18.Task";
import Communication from "./TASKS/Day-18_Task/communication/Communication";
import Aptitude from "./TASKS/Day-18_Task/apti/Aptitude";
import Technical from "./TASKS/Day-18_Task/Tech/Technical";
import Task from "./TASKS/Task";

const App = () => {
  return (<>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intraction" element={<Intraction />} />
        <Route path="/state" element={<State />} />
        <Route path="/task" element={<Task />} />
        <Route path="/task/day18Task" element={<Day18Task />} />
        <Route path="/task/day18Task/communication" element={<Communication />} />
        <Route path="/task/day18Task/aptitute" element={<Aptitude />} />
        <Route path="/task/day18Task/technical" element={<Technical />} />
      </Routes>
    </main>
  </>)
};

export default App;
