import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const App = () => {
  return (<>
    <header>
      <Layout />
    </header>
    <main>
      <Home />
      <About />
      <Contact />
    </main>
  </>)
};

export default App;
