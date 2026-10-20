
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancelPresentation } from 'react-icons/md';
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();
  const [currentLink, setCurrentLink] = useState(0);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const navLinks = [
    { id: "Home", label: t("navigation.home") },
    { id: "About me", label: t("navigation.about") },
    { id: "Services", label: t("navigation.services") },
    { id: "Experiences", label: t("navigation.experiences") },
    { id: "Certifications", label: t("navigation.certifications") },
    { id: "Projects", label: t("navigation.projects") },
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
        {navLinks.map(({ id, label }, index) => (
          <li
            key={index}
            onClick={() => handleActiveLink(index)}
            className={currentLink == index ? "active" : ""}
          >
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}