import react from "react";
import theme from "../../assets/assets/theme_pattern.svg";
import "./Services.css";
import service from "./Services_Data.jsx"
function Services(){
    return <div className="services">
        <div className="services-heading">
            <h1>Services</h1>
            <img src={theme} alt="beautiful-theme"/>
        </div>
        <div className="my-service-details">
            {service.map((service_object)=>{
                return <div className="service-card">
                    <h1>{service_object.service_no}</h1>
                    <h2>{service_object.service_name}</h2>
                    <p>{service_object.service_info}</p>
                    <button className="services-read-more">Read More</button>
                    </div>
            })}
        </div>
    </div>
}
export default Services;