import {Link} from "react-router-dom"

export default function NavBar() {
return (
    <header>
    <h1>Brandon Lambrecht</h1>
    <nav>
        <ul>
       <Link to="/">Home</Link>
       <Link to="/projects">Projects</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/resume">Resume</Link>
       </ul>
    </nav>
    </header>
)

// return (
//     <nav>
//     <ul>
//         {/* <!-- <Link to="/about"> About Me</Link> --> */}
//         <li><a href="#about-me">About Me</a></li>
//         <li><a href="#work">Work</a></li>
//         <li><a href="#contact-me">Contact Me</a></li>
//         <li><a href="./assets/Resume Lambrecht.pdf" download="Resume">Resume</a></li>
//     </ul>
    
// </nav>

// )
}