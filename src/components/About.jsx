// import me from "../assets/me.png";
// import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaFreeCodeCamp } from "react-icons/fa";

// export default function () {
//   return (
//     <section id="About me" className="about">
//       <h2>About me</h2>
//       <div className="content">
//         <div className="image">
//           <img
//             data-aos="fade-right"
//             width={440}
//             height={600}
//             src={me}
//             alt=""
//             srcset=""
//           />
//         </div>
//         <div data-aos="fade-left" className="about-me">
//           <div>
//             <h3>Developing With a Passion While Exploring The World.</h3>
//             <p>
//               Since beginning my journey as a Web developper , I've done remote
//               work for agencies , consulted for statups , and collaborate with
//               talend people to create digital products for both business and
//               consumer use . I’m quietly confident , naturally curious , and
//               perpetually working on improving my chops and problem solving .
//             </p>
//             <button><a href="#Contact">Contact me</a></button>
//           </div>
//           <div className="media-socials">
//             <h4>You can also follow me here :</h4>
//             <ul>
//               <li className="instagram">
                
//                  <a href="https://github.com/boris2442">
//                  <FaGithub size={30} />
//                    <span>GITHUB</span>
//                   </a> 
//               </li>
//               <li className="linkedin">
//               <a href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369">
//                 <FaLinkedin size={30} />
//                 <span>LINKEDIN</span>
//                 </a>
//               </li>
//               <li className="twitter">
//               <a href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1">
//                 <FaFreeCodeCamp size={30} />
//                 <span>FREECODECAMP</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import me from "../assets/me.png";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaFreeCodeCamp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="About me" className="about">
      <h2>{t('about.title')}</h2>
      <div className="content">
        <div className="image">
          <img
            data-aos="fade-right"
            width={440}
            height={600}
            src={me}
            alt=""
            srcSet=""
          />
        </div>
        <div data-aos="fade-left" className="about-me">
          <div>
            <h3>{t('about.subtitle')}</h3>
            <p>{t('about.description')}</p>
            <button><a href="#Contact">{t('about.contact')}</a></button>
          </div>
          <div className="media-socials">
            <h4>{t('about.follow')}</h4>
            <ul>
              <li className="instagram">
                <a href="https://github.com/boris2442">
                  <FaGithub size={30} />
                  <span>{t('about.github')}</span>
                </a>
              </li>
              <li className="linkedin">
                <a href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369">
                  <FaLinkedin size={30} />
                  <span>{t('about.linkedin')}</span>
                </a>
              </li>
              <li className="twitter">
                <a href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1">
                  <FaFreeCodeCamp size={30} />
                  <span>{t('about.freecodecamp')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}