import react from "react";
import logo from "../../assets/assets/logo.svg";
import "./NavBar.css";
function NavBar(){
    return <div className="navbar">
        <img src={logo} alt="logoimage"/>
        <ul type="none" className="content">
            <h2>Home</h2>
            <h2>About Me</h2>
            <h2>Services</h2>
            <h2>PortFolio</h2>
            <h2>Contact</h2>
    </ul>
    <button className="connect">Connect with me</button>
    </div>
}
export default NavBar;