import chataw from "../assets/projects_images/chataw.png";
import quiz from "../assets/projects_images/quiz.png";
import spes from "../assets/projects_images/spes.png";
import boristech from "../assets/projects_images/boristech.png";
import walnertech from "../assets/projects_images/walnertech.png";
import streaming from "../assets/projects_images/streaming.png";
import scholarchart from "../assets/projects_images/scholarchart.png";
import { useTranslation } from "react-i18next";
import ImageWithSkeleton from "./ImageWithSkeleton";

import { FaReact, FaBolt } from "react-icons/fa";
import {
  SiVuedotjs,
  SiTailwindcss,
  SiLaravel,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiBootstrap,
    SiPostgresql,
} from "react-icons/si";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="Projects" className="projects">
      <h2>{t("projects.title")}</h2>
      <div className="content">
        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={chataw} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={scholarchart}
              alt="scholarchart project"
              width="400px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            {/* <p>{t("projects.scholarchart.desc")}</p> */}
                    <p>{t("projects.scholarchart.desc")}</p>
            <button>
              {" "}
              <a href="https://scholarchart.evendeco.com/">
                {t("projects.scholarchart.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
         
            <span>
              {" "}
              <SiLaravel size={30} color="#ff2d20" />
            </span>
            <span>
              {" "}
              <SiTailwindcss size={30} color="#38b2ac" />
            </span>
            <span>
              {" "}
              <SiPostgresql size={30} color="#4479A1" />
            </span>
            <span>
              {" "}
              <SiPhp size={30} color="#4479A1" />
            </span>
          </div>
        </div>

        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={chataw} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={boristech}
              alt="boristech project"
              width="400px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            <p>{t("projects.boristech.desc")}</p>
            <button>
              {" "}
              <a href="https://boristech.evendeco.com/">
                {t("projects.boristech.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
            <span>
              {" "}
              <SiVuedotjs size={30} color="#41b883" />
            </span>
            <span>
              {" "}
              <SiLaravel size={30} color="#ff2d20" />
            </span>
            <span>
              {" "}
              <SiTailwindcss size={30} color="#38b2ac" />
            </span>
            <span>
              {" "}
              <SiMysql size={30} color="#4479A1" />
            </span>
            <span>
              {" "}
              <SiPhp size={30} color="#4479A1" />
            </span>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={chataw} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={walnertech}
              alt="Walnertech project"
              width="400px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            <p>{t("projects.walnertech.desc")}</p>
            <button>
              {" "}
              <a href="https://walner.evendeco.com/">
                {t("projects.walnertech.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
            <span>
              {" "}
              <SiVuedotjs size={30} color="#41b883" />
            </span>
            <span>
              {" "}
              <SiLaravel size={30} color="#ff2d20" />
            </span>
            <span>
              {" "}
              <SiTailwindcss size={30} color="#38b2ac" />
            </span>
            <span>
              {" "}
              <SiMysql size={30} color="#4479A1" />
            </span>
            <span>
              {" "}
              <SiPhp size={30} color="#4479A1" />
            </span>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={chataw} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={chataw}
              alt="Chataw project"
              width="400px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            <p>{t("projects.chataw.desc")}</p>
            <button>
              {" "}
              <a href="https://evendeco.com/">
                {t("projects.chataw.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
            <span>
              {" "}
              <FaReact size={30} color="#61dafb" />
            </span>
            <span>
              {" "}
              <SiTailwindcss size={30} color="#38b2ac" />
            </span>
            <span>
              {" "}
              <SiMysql size={30} color="#4479A1" />
            </span>
            <span>
              {" "}
              <SiPhp size={30} color="#4479A1" />
            </span>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={chataw} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={chataw}
              alt="Chataw project"
              width="400px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            <p>{t("projects.chataw.desc")}</p>
            <button>
              {" "}
              <a href="https://evendeco.com/">
                {t("projects.chataw.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
            <span>
              {" "}
              <FaReact size={30} color="#61dafb" />
            </span>
            <span>
              {" "}
              <SiTailwindcss size={30} color="#38b2ac" />
            </span>
            <span>
              {" "}
              <SiMysql size={30} color="#4479A1" />
            </span>
            <span>
              {" "}
              <SiPhp size={30} color="#4479A1" />
            </span>
          </div>
        </div>

        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={quiz} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={quiz}
              alt="Quiz project"
              width="400px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            <p>{t("projects.quiz.desc")}</p>
            <button>
              {" "}
              <a href="https://campuspay.evendeco.com/">
                {t("projects.quiz.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
            <span>
              <SiLaravel size={30} color="#ff2d20" />
            </span>
            <span>
              <SiTailwindcss size={30} color="#38b2ac" />
            </span>
            <span>
              <SiMysql size={30} color="#4479A1" />
            </span>
            <span>
              <FaBolt size={30} color="#8BC0D0" />
            </span>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={spes} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={spes}
              alt="Spes project"
              width="400px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            <p>{t("projects.spes.desc")}</p>
            <button>
              {" "}
              <a href="https://godfashion.evendeco.com/">
                {t("projects.spes.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
            <span>
              <SiVuedotjs size={30} color="#41b883" />
            </span>
            <span>
              <SiMongodb size={30} color="#47A248" />
            </span>
            <span>
              <SiNodedotjs size={30} color="#339933" />
            </span>
            <span>
              <SiExpress size={30} color="#000000" />
            </span>
            <span>
              <SiBootstrap color="#7952B3" size={30} />
            </span>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="project-img">
            {/* <img src={streaming} alt="" srcSet="" /> */}
            <ImageWithSkeleton
              src={streaming}
              alt="Streaming project"
              width="560px"
              height="100%"
            />
          </div>
          <hr />
          <div className="description">
            <p>{t("projects.streaming.desc")}</p>
            <button>
              {" "}
              <a href="https://boristech.evendeco.com">
                {t("projects.streaming.view")}
              </a>{" "}
            </button>
          </div>
          <div className="pourcentage-project">
            <span>
              <SiLaravel size={30} color="#ff2d20" />
            </span>
            <span>
              <SiTailwindcss size={30} color="#38b2ac" />
            </span>
            <span>
              <SiVuedotjs size={30} color="#41b883" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
