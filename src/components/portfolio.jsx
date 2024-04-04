export default function PortfolioPage() {
  const pawFit = "https://github.com/brandonlambrecht/paw-fit";
  const careerCache = "https://github.com/brandonlambrecht/career-cache";
  const childerStore = "https://github.com/brandonlambrecht/e-com-store";

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
        <div className="portfolio-card2" id="card-image-3">
          <div>
            <a href="https://career-cache-web.onrender.com" target="_blank">
              Career Cache
            </a>
            <a href={careerCache} target="_blank">
              <i id="git-logo" class="fa-brands fa-github fa-1.8x"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-card2" id="card-image-4">
          <div>
            <a
              href="https://brandonlambrecht.github.io/e-com-store/"
              target="_blank"
            >
              E-com Store
            </a>
            <a href={childerStore} target="_blank">
              <i id="git-logo" class="fa-brands fa-github fa-1.8x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
