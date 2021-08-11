
import ProfilePic from '../../assets/img/swiss.JPG'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import './style.css'

function AboutMe() {
    return (
        <Container id="about-me-container" fluid>
            <Row>
                <h1 id="about-me-title">About Me</h1> 
            </Row>
            <Row id="about-me-wrapper">
                <Col id="profile-pic" sm={3}>
                    <Image src={ProfilePic} alt="profile-pic"/>
                </Col>
                <Col sm={9} id="text-div">
                    <p id="about-me-text">Hi and welcome to my website made from scratch using React! I'm a full-stack software developer, blockchain enthusiast, and musician here in Austin, TX. I love creating and enhancing peoples experience with an attention to detail beyond thier expectations. I'm about to graduate from the Univerity of Texas with a certificate in Full-Stack Development focused on the MERN stack. Over the years, I've built an unique background in technology, music, leadership, and sales that allows me to overcome any challenge. < br/>With the skills I've built over the years necessary to excel in the Silicon Hills, I'm now turning my focus towards my passion for tech and ready to create!</p>
                </Col>                
            </Row>                                 
        </ Container>
    )
}

export default AboutMe
