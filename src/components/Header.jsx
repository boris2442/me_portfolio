import Navigation from "./Navigation";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";
export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="logo">
        <a href="https://borisaubin.vercel.app/" style={{  textDecoration: "none", color:"#31525b" }}
        >
          <span className="first-letter">{t("header.logo_first")}</span>
          <span>{t("header.logo_last")}</span>
        </a>
        <LanguageSwitcher />
      </div>
      <Navigation />
      <button>
        <a href="#Contact">{t("header.contact")}</a>
      </button>
      {/* <LanguageSwitcher /> */}
    </header>
  );
}
