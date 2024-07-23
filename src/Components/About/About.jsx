import react from "react";
import "./About.css";
import theme from "../../assets/assets/theme_pattern.svg";
import image from "../../assets/assets/photo_2024-07-23_00-41-09.jpg"
function About(){
    return <div className="About">
        <h1>About me</h1>
        <img src={theme} alt="theme"/>
        <div className="my-about">
            <img class="my-about-fullimage" src={image} alt="my-full-photo" />
            <div className="aboutpara">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit optio odit unde tempora voluptas, commodi aut consectetur aspernatur quibusdam vitae est doloribus, accusantium reprehenderit ipsum ut eligendi debitis sunt nesciunt?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae harum assumenda autem eveniet mollitia, odit sint nihil et vero modi exercitationem quibusdam, aliquam dolore.</p>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                <div className="about-skill">
                    <p>Javascript</p><hr  style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr  style={{width:"70%"}}/>
                </div>
            </div>
            </div>
            </div>
            </div>
}
export default About;