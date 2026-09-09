import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/meghana-bonthu"
          target="_blank"
          rel="noreferrer"
          aria-label="Meghana Bonthu on GitHub"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/bmeghanams/"
          target="_blank"
          rel="noreferrer"
          aria-label="Meghana Bonthu on LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p>
        Designed &amp; built by Meghana Bonthu
      </p>
    </footer>
  );
}

export default Footer;
