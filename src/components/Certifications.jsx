import { FaExternalLinkAlt } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { useTranslation } from "react-i18next";

const certifications = [
  {
    id: "sqlBasic",
    url: "https://www.hackerrank.com/certificates/d13495697207",
  },
  {
    id: "sqlAdvanced",
    url: "https://www.hackerrank.com/certificates/fd0c79b0e8ba",
  },
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="Certifications" className="certifications">
      <h2>{t("certifications.title")}</h2>
      <div className="content">
        {certifications.map(({ id, url }) => (
          <article className="certification-card" key={id}>
            <div className="certification-provider">
              <SiHackerrank aria-hidden="true" size={32} />
              <span>HackerRank</span>
            </div>
            <h3>{t(`certifications.items.${id}.name`)}</h3>
            <dl>
              <div>
                <dt>{t("certifications.yearLabel")}</dt>
                <dd>{t(`certifications.items.${id}.date`)}</dd>
              </div>
              <div>
                <dt>{t("certifications.skillLabel")}</dt>
                <dd>{t(`certifications.items.${id}.skill`)}</dd>
              </div>
              {id === "sqlAdvanced" && (
                <div>
                  <dt>{t("certifications.credentialLabel")}</dt>
                  <dd>{t(`certifications.items.${id}.credentialId`)}</dd>
                </div>
              )}
            </dl>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {t("certifications.view")}
              <FaExternalLinkAlt aria-hidden="true" size={12} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
