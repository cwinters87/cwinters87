import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './style.css'


function Resume() {
    return (
        <Container id="resume-container" fluid>
            <Row>
                <h1>Resume</h1>
            </Row>
            <Row id="download-div">
                <Col>Download my <a id="resume-link" href={require("../../assets/files/Chris-Winters-Resume.pdf").default}download>resume</a></Col>
            </Row>
            <Row id="resume-list-div">
                <div id="resume-list-items">
                    <ul id="front-end-list">Front-end Proficiencies:
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>                        
                        <li>Handlebars</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                    </ul>
                    <ul id="back-end-list">Back-end Proficiencies:
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>REST API</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>Progressive Web Apps</li>
                    </ul>
                </div>
            </Row>
        </Container>
    )
}

export default Resume
