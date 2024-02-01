import { aboutPage } from "../assets/portfolioData.json";

export default function HomePage() {
  return (
    <section className="container">
      <h2 id="about-me">{aboutPage.title}</h2>
      <div className="content-wrapper">
        <img
          id="about-image"
          src={aboutPage.image}
          alt="Description of the image"
        />
        <p>{aboutPage.paragraph}</p>
        <p>{aboutPage.paragraph2}</p>
        <p>{aboutPage.paragraph3}</p>
      </div>
    </section>
  );
}
