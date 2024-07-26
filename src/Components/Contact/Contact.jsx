import react from "react";
import theme from "../../assets/assets/theme_pattern.svg";
import mail from "../../assets/assets/mail_icon.svg";
function Contact(){
    return(<div className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme} alt="theme"/>
        </div>
        <div className="lets-talk">
            <h1>Lets talk</h1>
            <p>I am currently available to take new projects,so feel free to send me a message about anything that you want me to work on.You can contact anytime.</p>
            </div>
            <div className="mail-details">
            <img src={mail} alt="mail-icon"/><p>captainanuj2004@gmail.com</p>
            </div>

        </div>
)
}
export default Contact;