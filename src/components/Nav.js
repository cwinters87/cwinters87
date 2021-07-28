
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"

function Nav() {
    return (
        <Navbar id='navbar'>
            <Container>
                <Navbar.Brand href="#home">This is the Navbar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login" className="font-color-white">Chris Winters</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}


export default Nav
