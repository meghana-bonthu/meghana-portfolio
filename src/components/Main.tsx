import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePhoto from '../assets/images/meghana-profile.png';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={profilePhoto}
            alt="Meghana Bonthu"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/meghana-bonthu"
              target="_blank"
              rel="noreferrer"
              aria-label="Meghana Bonthu GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/bmeghanams/"
              target="_blank"
              rel="noreferrer"
              aria-label="Meghana Bonthu LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Meghana Bonthu</h1>
          <p>.NET Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/meghana-bonthu"
              target="_blank"
              rel="noreferrer"
              aria-label="Meghana Bonthu GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/bmeghanams/"
              target="_blank"
              rel="noreferrer"
              aria-label="Meghana Bonthu LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;