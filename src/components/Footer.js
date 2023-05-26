import { pageLinks } from "../data";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;

            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="footer-icons">
          <SocialLink className='footer-icons'/>
        </ul>

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
