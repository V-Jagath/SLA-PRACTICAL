import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Intraction from "./pages/Intraction";


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
      </Routes>
    </main>
  </>)
};

export default App;
