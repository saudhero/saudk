import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
