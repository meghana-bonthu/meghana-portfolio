import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let's Connect</h1>

          <p>
            I’m currently exploring .NET Full Stack Developer opportunities and
            would be happy to connect with recruiters, engineering teams, and
            developers working on modern full-stack and cloud applications.
          </p>

          <div className="contact-links">
            <a
              href="mailto:bmeghanams@gmail.com"
              className="contact-card"
            >
              <EmailIcon />
              <div>
                <strong>Email</strong>
                <span>bmeghanams@gmail.com</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/bmeghanams/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <LinkedInIcon />
              <div>
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </div>
            </a>

            <a
              href="https://github.com/meghana-bonthu"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <GitHubIcon />
              <div>
                <strong>GitHub</strong>
                <span>View my projects</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
