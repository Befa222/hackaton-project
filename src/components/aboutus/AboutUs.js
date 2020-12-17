import Navbar from "../navbar/Navbar";
import githubLogo from "../images/githublogo.png";
import './AboutUsPage.css'

const AboutUs = () => (
    <>
        <Navbar />
        <a className="about-link" href="https://github.com/roxana-florea" target="_blank">
            <img src={githubLogo} alt="github logo icon" />
            <p>Roxana Florea</p>
        </a>
        <a className="about-link" href="https://github.com/Befa222" target="_blank">
            <img src={githubLogo} alt="github logo icon" />
            <p>Fabien Lallement</p>
        </a>
        <a className="about-link" href="https://github.com/Deanleonard26" target="_blank">
            <img src={githubLogo} alt="github logo icon" />
            <p>Dean Leonard</p>
        </a>
        <a className="about-link" href="https://github.com/JacopoLuri" target="_blank">
            <img src={githubLogo} alt="github logo icon" />
            <p>Jacopo Luri</p>
        </a>
        <a className="about-link" href="https://github.com/nphalen29" target="_blank">
            <img src={githubLogo} alt="github logo icon" />
            <p>Nikolai Phalen</p>
        </a>
    </>
);

export default AboutUs;