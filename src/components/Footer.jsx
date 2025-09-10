// import {
//   FaFacebook,
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaTwitter,
//   FaFreeCodeCamp
// } from "react-icons/fa";
// import Navigation from "./Navigation";

// export default function () {
//   const navLikns = ["Home", "About me", "Services", "Experiences", "Projects"];
//   return (
//     <footer>
//       <div className="navigation-section">
//         <ul>
//           {navLikns.map((link, index) => (
//             <li key={index} onClick={() => handleActiveLink(index)}>
//               <a href={"#" + link}>{link}</a>
//             </li>
//           ))}
//         </ul>
//         <ul className="media">
//           <a href="https://github.com/boris2442/">
//             <FaGithub size={20} />
//           </a>
//           <a href="  https://www.linkedin.com/in/boris-aubin-simo-26b9a0369">
//             <FaLinkedin size={20} />
//           </a>

//           <a href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1">
//             <FaFreeCodeCamp size={20} />
//           </a>
//         </ul>
//       </div>
//     </footer>
//   );
// }



import {
  FaGithub,
  FaLinkedin,
  FaFreeCodeCamp
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Footer() {
  const { t } = useTranslation();

  const navLikns = [
    t('footer.navigation.home'),
    t('footer.navigation.about'),
    t('footer.navigation.services'),
    t('footer.navigation.experiences'),
    t('footer.navigation.projects')
  ];

  return (
    <footer>
      <div className="navigation-section">
        <ul>
          {navLikns.map((link, index) => (
            <li key={index}>
              <a href={"#" + link}>{link}</a>
            </li>
          ))}
        </ul>
        <ul className="media">
          <a href="https://github.com/boris2442/">
            <FaGithub size={20} />
            <span>{t('footer.media.github')}</span>
          </a>
          <a href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369">
            <FaLinkedin size={20} />
            <span>{t('footer.media.linkedin')}</span>
          </a>
          <a href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1">
            <FaFreeCodeCamp size={20} />
            <span>{t('footer.media.freecodecamp')}</span>
          </a>
           <LanguageSwitcher />
        </ul>
      </div>
    </footer>
  );
}