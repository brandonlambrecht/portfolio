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
        <div className="portfolio-card" id="card-image-1">
          <a
            href="https://thawing-bastion-63318-3c68bfecd820.herokuapp.com/"
            target="_blank"
          >
            Pawfit
          </a>
          <a href={pawFit} target="_blank">
            <i id="git-logo" class="fa-brands fa-github fa-1.8x"></i>
          </a>
        </div>
        <div className="portfolio-card2" id="card-image-2">
          <div>
            <a
              href="https://rpmcquigg.github.io/Vandy-Project-01/"
              target="_blank"
            >
              Local List
            </a>
            <a href={localList} target="_blank">
              <i id="git-logo" class="fa-brands fa-github fa-1.8x"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-card2" id="card-image-3">
          <div>
            <a href={socialNetwork} target="_blank">
              Social Network
            </a>
            <a
              href="https://github.com/brandonlambrecht?tab=repositories"
              target="_blank"
            >
              <i id="git-logo" class="fa-brands fa-github fa-1.8x"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-card2" id="card-image-4">
          <div>
            <a href={readmeGen} target="_blank">
              README Generator
            </a>
            <a
              href="https://github.com/brandonlambrecht?tab=repositories"
              target="_blank"
            >
              <i id="git-logo" class="fa-brands fa-github fa-1.8x"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-card2" id="card-image-5">
          <div>
            <a href="https://pwa-text-editor-lqji.onrender.com" target="_blank">
              Text Editor
            </a>
            <a href={textEditor} target="_blank">
              <i id="git-logo" class="fa-brands fa-github fa-1.8x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
