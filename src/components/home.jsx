import {aboutPage} from "../assets/portfolioData.json"


export default function HomePage() {
return (
    <section className="container">

    <h2 id="about-me">{aboutPage.title}</h2>
    <div>
        <p>
            {aboutPage.paragraph}
        </p>
    </div>
</section>
)}

