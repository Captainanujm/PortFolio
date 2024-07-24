import react  from "react";
import "./My_work.css";
import arrow from "../../assets/assets/arrow_icon.svg";
import my_work from "./My_work_data";
import theme from "../../assets/assets/theme_pattern.svg";
function mywork(){
    return <div className="my-work-container">
        <h1 className="my-work-heading">My Latest Work</h1>
        <img className="my-work-theme" src={theme} alt="theme_logo"/>
        <div className="work-details-container">
            {my_work.map((work,index)=>{
                console.log(work.imgAddress);
                return <div className="work-card" key={index}>
                    
                </div>

            })}
        </div>
        <button className="show-more">Show more<img className="arrow-img" src={arrow} alt="arrow"/></button>
    </div>
}
export default mywork;