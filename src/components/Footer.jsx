import { FaGithub, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";

import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="social-section">
        <a
          href="https://github.com/boris2442/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFreeCodeCamp size={20} />
        </a>
        {/* <LanguageSwitcher /> */}
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} {t("footer.copyright.copy")}
      </p>
    </footer>
  );
}
