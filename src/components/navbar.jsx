import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="p-3 text-primary-emphasis bg-success-subtle border border-dark-subtle rounded-3"
    >
      <Container>
        <Navbar.Brand className="fs-2 text-start" href="/">
          Brandon Lambrecht
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto link-opacity-75-hover">
            <Nav.Link href="/">Home</Nav.Link>
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
