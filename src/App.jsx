import react from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import "./index.css";
function App(){
  return <div className="app">
    <NavBar/>
    <Hero/>
    <About/>
  </div>
}
export default App;