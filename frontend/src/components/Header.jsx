import {Navbar, Nav, Container, NavbarBrand} from "react-bootstrap";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="MyShop" width="50px" height="50px" className="mr-2" />
                        MyShop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart"><FaShoppingCart/> Cart</Nav.Link>
                            <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;