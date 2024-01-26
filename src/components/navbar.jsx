import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    // <>
    //   <header>
    //     <h1>Brandon Lambrecht</h1>
    //     <nav>
    //       <Container>
    //         <ul>
    //           <Link to="/">Home</Link>
    //           <Link to="/portfolio">Portfolio</Link>
    //           <Link to="/contact">Contact</Link>
    //           <Link to="/resume">Resume</Link>
    //         </ul>
    //       </Container>
    //     </nav>
    //   </header>

    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-success p-2 text-white bg-opacity-75"
    >
      <Container>
        <Navbar.Brand href="/">Brandon Lambrecht</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </>
  );
}
