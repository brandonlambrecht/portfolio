import { Link } from "react-router-dom";

export default function PortfolioPage() {
  const pawFit = "https://github.com/brandonlambrecht/paw-fit";
  const localList = "https://github.com/brandonlambrecht/the-local-list";
  const socialNetwork = "https://github.com/brandonlambrecht/social-network";
  const readmeGen = "https://github.com/brandonlambrecht/readme-generator";
  const textEditor = "https://github.com/brandonlambrecht/pwa-text-editor";

  return (
    <section className="container-content">
      <div className="title-wrap">
        <h2 id="work">Portfolio</h2>
      </div>
      <div className="content-wrap">
        <div id="card1">
          <a href={pawFit} target="_blank">
            Pawfit
          </a>
          <a
            className="link-opacity-50-hover logo"
            href="https://github.com/brandonlambrecht?tab=repositories"
            target="_blank"
          >
            <i class="fa-brands fa-square-github fa-3x"></i>
          </a>
        </div>
        <div id="card2">
          <div>
            <a href={localList} target="_blank">
              Local List
            </a>
          </div>
        </div>
        <div id="card3">
          <div>
            <a href={socialNetwork} target="_blank">
              Social Network
            </a>
          </div>
        </div>

        <div id="card4">
          <div>
            <a href={readmeGen} target="_blank">
              README Generator
            </a>
          </div>
        </div>

        <div id="card5">
          <div>
            <a href={textEditor} target="_blank">
              Text Editor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
