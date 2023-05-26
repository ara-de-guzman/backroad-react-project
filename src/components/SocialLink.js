import { socialLinks } from "../data";
import '../index.css'

const SocialLink = ({iconName}) => {
  return (
    <>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;

        return (
          <li key={id}>
            <a href={href} target="_blank" rel='noreferrer' className={iconName}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default SocialLink;


  