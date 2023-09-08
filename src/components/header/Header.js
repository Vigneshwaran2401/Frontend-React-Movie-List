import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import  Button  from "react-bootstrap/Button";
import  Container  from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/Frontend-React-Movie-List" style={{"color": "gold"}}>
                <FontAwesomeIcon icon={faVideoSlash} /> Movie App  
            </Navbar.Brand>
            <Navbar.Toggle id="navScroll" />
            <Navbar.Collapse id="navScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{"maxHeight": "100px"}}>
                    <NavLink to="/Frontend-React-Movie-List" className="nav-link" end>Home</NavLink>
                    <NavLink to="/Frontend-React-Movie-List/watchList" className="nav-link">Movies</NavLink>
                </Nav>
                <Button variant="outline-info" className="me-2">Register</Button>
                <Button variant="outline-info" className="me-2">Login</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default Header;