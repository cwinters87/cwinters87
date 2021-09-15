
import ProfilePic from '../../assets/img/cwint4.JPG'
import Container from "react-bootstrap/Container"
import './style.css'

function AboutMe() {
    return (
        <Container id="about-me-container" fluid>
            <div>
                <h1 id="about-me-title">About Me</h1> 
            </div>
            <div id="about-me-wrapper">
                <div id="profile-pic" >
                    <img src={ProfilePic} alt="profile-pic"/>
                </div>
                <div  id="text-div">
                    <p id="about-me-text">I'm a full-stack software developer, blockchain enthusiast, and musician in Austin, TX. I love creating and enhancing peoples experience with attention to detail beyond thier expectations. I graduated from the Univerity of Texas with a certificate in Full-Stack Development focused on the MERN Stack in August of 2021. Over the years, I've built a unique background in technology, music, leadership, and sales that allows me to overcome any challenge. < br/>With the skills I've built over the years necessary to excel in the Silicon Hills, I've turned my focus towards my passion for tech and now get to create cool websites and applications.</p>
                </div>                
            </div>                                 
        </ Container>
    )
}

export default AboutMe
