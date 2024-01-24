import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <h1>Brandon Lambrecht</h1>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </ul>
      </nav>
    </header>
  );
}
