import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="slider-size smallpadding">
      <div>
        <h6 className= "footer-link" href="/"> Home </h6>
        <h6 className= "footer-link" href="/Resume"> Resume </h6>
        <h6 className= "footer-link" href="/About"> About </h6>
      </div>
      <div>
        <a className= "footer-link app-link" href="https://github.com/Snslf"><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a className= "footer-link app-link" href="https://www.linkedin.com/in/quentin-roudier-546008150/"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
