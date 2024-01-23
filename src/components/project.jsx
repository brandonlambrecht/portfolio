import { Link } from "react-router-dom";

export default function ProjectPage() {
  const pawFit = "https://github.com/brandonlambrecht/paw-fit";
  const localList = "https://github.com/brandonlambrecht/the-local-list";
  const socialNetwork = "https://github.com/brandonlambrecht/social-network";
  const readmeGen = "https://github.com/brandonlambrecht/readme-generator";
  const textEditor = "https://github.com/brandonlambrecht/pwa-text-editor";

  return (
    <section className="container-content">
      <div className="title-wrap">
        <h2 id="work">Projects</h2>
      </div>
      <div className="content-wrap">
        <div id="card1">
          <Link to={pawFit}>PawFit</Link>
        </div>
        <div id="card2">
          <div>
            <Link to={localList}>The Local List</Link>
          </div>
        </div>
        <div id="card3">
          <div>
            <Link to={readmeGen}>README Generator</Link>
          </div>
        </div>

        <div id="card4">
          <div>
            <Link to={socialNetwork}>Social Network</Link>
          </div>
        </div>

        <div id="card5">
          <div>
            <Link to={textEditor}>Text Editor</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
