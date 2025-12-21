import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intraction from "./pages/Intraction";
import State from "./components/State";
import Day18Task from "./TASKS/Day-18_Task/Day18.Task";
import Communication from "./TASKS/Day-18_Task/communication/Communication";
import Aptitude from "./TASKS/Day-18_Task/apti/Aptitude";
import Technical from "./TASKS/Day-18_Task/Tech/Technical";
import Task from "./TASKS/Task";
import Day19Task from "./TASKS/DailyTasks/Day19Task";
import Day20Task from "./TASKS/DailyTasks/Day20Task";
import MainLayout from "./pages/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UseLocation from "./TASKS/DailyTasks/UseLocation";
import UseParams from "./TASKS/DailyTasks/UseParams";

const App = () => {
  return (<>
    <nav>
      {/* <Navbar /> */}
    </nav>

    <main>

      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/intraction" element={<Intraction />} />
          <Route path="/state" element={<State />} />
          <Route path="/task" element={<Task />} />
          <Route path="/task/day18Task" element={<Day18Task />} />
          <Route path="/task/day18Task/communication" element={<Communication />} />
          <Route path="/task/day18Task/aptitute" element={<Aptitude />} />
          <Route path="/task/day18Task/technical" element={<Technical />} />
          <Route path="/task/day19Task" element={<Day19Task />} />
          <Route path="/task/day20Task" element={<Day20Task />} />
          <Route path="/task/uselocation" element={<UseLocation />} />
          <Route path="/task/useparams" element={<UseParams />} />
          <Route path="/task/useparams/:id" element={<UseParams />} />
        </Route>

      </Routes>

    </main>
  </>)
};

export default App;
