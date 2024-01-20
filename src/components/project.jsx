import {Link} from "react-router-dom"

export default function ProjectPage() {
    return (
    
    <section className="container-content">

    <div className="title-wrap">
        <h2 id="work">Projects</h2>
    </div>
    <div className="content-wrap">
        <div id="card1">
            <Link to="https://github.com/brandonlambrecht/weather-dashboard">PawFit</Link>
        </div>
        <div id="card2">
                    <div>
                        <Link to="https://github.com/brandonlambrecht/work-day-scheduler>Workday Scheduler">The Local List</Link>
                    </div>
                </div>
        <div id="card3">
                    <div>
                        <Link to="https://github.com/brandonlambrecht/work-day-scheduler>Workday Scheduler">README Generator</Link>
                    </div>
                </div>

        <div id="card4">
                    <div>
                        <Link to="https://github.com/brandonlambrecht/work-day-scheduler>Workday Scheduler">Social Network</Link>
                    </div>
                </div>

        <div id="card5">
                    <div>
                        <Link to="https://github.com/brandonlambrecht/work-day-scheduler>Workday Scheduler">Text Editor</Link>
                    </div>
                </div>

        
    </div>
    </section>
)
}
