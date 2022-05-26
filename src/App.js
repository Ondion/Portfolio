import "./styles/app.css"
import Header from "./pages/Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Icones from "./components/Icones";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Mission />
        <Contact />
      </main>
      <Icones />
    </>
  );
}

export default App;
