// import { RxHamburgerMenu } from "react-icons/rx";
// import { MdCancelPresentation } from 'react-icons/md'
// import { useState } from "react";

// export default function () {

//   const [currentLink, setCurrentLink] = useState(0);
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);


//   const navLikns = ["Home", "About me", "Services", "Experiences", "Projects"];

//   const handleActiveLink = (index) => {
//     setCurrentLink(index);
//     setHamburgerOpen(!hamburgerOpen);
//   };

//   return (
//     <nav>
//       <div className="hamburger" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
//         {
//           hamburgerOpen ? <MdCancelPresentation className={hamburgerOpen ? 'cancel-hamburger' : ''} /> : <RxHamburgerMenu />
//         }
//       </div>
//       <ul className={hamburgerOpen ? 'mobile-menu' : ''}>
//         {navLikns.map((link, index) => (
//           <li
//             key={index}
//             onClick={() => handleActiveLink(index)}
//             className={currentLink == index ? "active" : ""}
//           >
//             <a href={'#' + link}>{link}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancelPresentation } from 'react-icons/md';
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();
  const [currentLink, setCurrentLink] = useState(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const navLikns = [
    t('navigation.home'),
    t('navigation.about'),
    t('navigation.services'),
    t('navigation.experiences'),
    t('navigation.projects')
  ];

  const handleActiveLink = (index) => {
    setCurrentLink(index);
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        {
          hamburgerOpen ? <MdCancelPresentation className={hamburgerOpen ? 'cancel-hamburger' : ''} /> : <RxHamburgerMenu />
        }
      </div>
      <ul className={hamburgerOpen ? 'mobile-menu' : ''}>
        {navLikns.map((link, index) => (
          <li
            key={index}
            onClick={() => handleActiveLink(index)}
            className={currentLink == index ? "active" : ""}
          >
            <a href={'#' + link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}