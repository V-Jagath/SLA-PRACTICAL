import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Day11Task from "./ClassTask/Day11Task";
import Day12Task from "./ClassTask/Day12Task";
import Resume from "./ClassTask/Resume";

const App = () => {
  return (
    <>
      <main>
        <HomePage />
      </main>
      <main>
        <Routes>
          <Route path="/day11" element={<Day11Task />} />
          <Route path="/day12" element={<Day12Task />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
