import react from "react";
import "./Hero.css";
import img from "../../assets/assets/photo_2024-07-22_22-15-27.jpg"
function Hero(){
    return <div className="hero">
        <img className="my-img" src={img} alt="my-profile"/>
        <div className="profile-name">
        <h1 class="my-profile-name"><span class="my-name">I'm Anuj Mishra</span>, a frontend developer</h1>
        <h1 class="my-profile-name">from Prayagraj, Uttar Pradesh</h1>
        <p className="description">I am frontend developer, my major tech stack includes React.js</p>
        </div>
    </div>
}
export default Hero;