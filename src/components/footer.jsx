import {Link} from "react-router-dom"

export default function Footer() {
    return (
    <footer>
    <section className ="container">
        <nav>
            <ul>
           <Link to="/">Github</Link>
           <Link to="/">LinkedIn</Link>
           </ul>
        </nav>
    </section>
    </footer>
    )
}