
// import Navigation from "./Navigation";

// export default function () {

//   const navLikns = ["Home", "About me", "Services", "Experiences", "Projects"];



//   return (
//     <header>
//       <div className="logo">
//         <span className="first-letter">A</span>
//         <span>ubin</span>
//       </div>
//       <Navigation />
//       <button><a href="#Contact">Contact me</a></button>
//     </header>
//   );
// }
import Navigation from "./Navigation";
import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "./LanguageSwitcher";
export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="logo">
        <span className="first-letter">{t('header.logo_first')}</span>
        <span>{t('header.logo_last')}</span>
      </div>
      <Navigation />
      <button><a href="#Contact">{t('header.contact')}</a></button>
       {/* <LanguageSwitcher /> */}
    </header>
  );
}