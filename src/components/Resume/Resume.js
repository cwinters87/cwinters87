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
            <div id="resume-list-items">
                    <ul id="front-end-list">Front-end Proficiencies:
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>  
                        <li>HTML</li>
                        <li>CSS</li>                                              
                        <li>Handlebars</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                    </ul>
                    <ul id="back-end-list">Back-end Proficiencies:
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>GraphQL</li>
                        <li>REST API</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
            </div>
        </Container>
    )
}

export default Resume
