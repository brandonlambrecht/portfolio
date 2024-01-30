import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="p-3 text-primary-emphasis border  nav-bar"
    >
      <Container>
        <Navbar.Brand className="fs-2 text-start title-text" href="/">
          <h1>Brandon Lambrecht</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end nav-text">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <Nav.Link href="/#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
