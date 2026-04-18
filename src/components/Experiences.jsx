import { useTranslation } from "react-i18next";
// React Icons
import { FaReact } from "react-icons/fa"; // React
import { SiVuedotjs } from "react-icons/si"; // Vue.js
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS
import {
  SiFigma,
  SiAdobephotoshop,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiBootstrap,
} from "react-icons/si"; // Figma
import { SiAdobexd } from "react-icons/si"; // Adobe XD
import { FaPaintBrush } from "react-icons/fa"; // Canvas

import { SiLaravel } from "react-icons/si"; // Laravel
import { SiExpress } from "react-icons/si"; // Express.js

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="Experiences" className="experiences">
      <h2>{t("experiences.title")}</h2>
      <div className="content">
        <div data-aos="zoom-in" className="frontend">
          <div className="hr-line"></div>
          <span>{t("experiences.period")}</span>
          <div className="comments">
            <h5>{t("experiences.frontend.title")}</h5>
            <p>{t("experiences.frontend.desc")}</p>
            <div className="pourcentage">
              <div>
                <span>
                  {" "}
                  <SiVuedotjs size={30} color="#41b883" />
                </span>
              </div>
              <div>
                {/* <div className="react"> */}
                <span>
                  {" "}
                  <FaReact size={30} color="#61dafb" />
                </span>

                {/* </div> */}
              </div>

              <div>
                <span>
                  {" "}
                  <SiTailwindcss size={30} color="#38b2ac" />
                </span>
              </div>
              <div>
                <span>
                  {" "}
                  <SiBootstrap size={30} color="#7952B3" />
                </span>
              </div>

              {/* <div>
                <div className="bootstrap">
                  <span>Bootstrap</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="ui-ux">
          <div className="hr-line"></div>
          <span>{t("experiences.period")}</span>
          <div className="comments">
            <h5>{t("experiences.uiux.title")}</h5>
            <p>{t("experiences.uiux.desc")}</p>
            <div className="pourcentage">
              <div>
                {/* <div className="figma"> */}
                <span>
                  <SiFigma size={30} color="#f24e1e" />
                </span>
                {/* </div> */}
              </div>
              <div>
                {/* <div className="adobe"> */}
                <span>
                  {" "}
                  <SiAdobexd size={30} color="#ff2bc2" />
                </span>
                {/* </div> */}
              </div>
              <div>
                {/* <div className="canva"> */}
                <span>
                  <FaPaintBrush size={30} color="#2850A9" />
                </span>
                {/* </div> */}
              </div>
              <div>
                {/* <div className="photoshop"> */}
                <span>
                  {" "}
                  <SiAdobephotoshop size={30} color="#31A8FF" />
                </span>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="backend">
          <div className="hr-line"></div>
          <span>{t("experiences.period")}</span>
          <div className="comments">
            <h5>{t("experiences.backend.title")}</h5>
            <p>{t("experiences.backend.desc")}</p>
            <div className="pourcentage">
              <div>
                {/* <div className="typescript"> */}
                <span>
                  <SiLaravel size={30} color="#ff2d20" />
                </span>
                {/* </div> */}
              </div>
              <div>
                {/* <div className="node"> */}
                <span>
                  <SiNodedotjs size={30} color="#339933" />
                </span>
                {/* </div> */}
              </div>
              <div>
                {/* <div className="express"> */}
                <span>
                  {" "}
                  <SiExpress size={30} color="#000000" />
                </span>
                {/* </div> */}
              </div>
              <div>
                {/* <div className="express"> */}
                <span>
                  {" "}
                  <SiMysql size={30} color="#4479A1" />
                </span>
                {/* </div> */}
              </div>
              <div>
                <span>
                  <SiMongodb size={30} color="#47A248" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="backend">
          <div className="hr-line"></div>
          <span>{t("experiences.period")}</span>

          <div className="comments">
            <h5>{t("experiences.project_management.title")}</h5>
            <p>{t("experiences.project_management.desc")}</p>

            <div className="pourcentage">
              <div>
                <span>📊</span>
              </div>
              <div>
                <span>🧠</span>
              </div>
              <div>
                <span>🤝</span>
              </div>
              <div>
                <span>⚡</span>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="backend">
          <div className="hr-line"></div>
          <span>{t("experiences.period")}</span>

          <div className="comments">
            <h5>{t("experiences.architecture.title")}</h5>
            <p>{t("experiences.architecture.desc")}</p>

            <div className="pourcentage">
              <div>
                <span>📐</span>
              </div>
              <div>
                <span>🏗️</span>
              </div>
              <div>
                <span>🧩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
