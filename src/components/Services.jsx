// import frontend from "../assets/frontend.png";
// import backend from "../assets/backend.png";
// import uiux from "../assets/ux-ui.png";

// export default function () {
//   return (
//     <section id="Services" className="services">
//       <h2>What Services I'm Providing ?</h2>
//       <div className="content">
//         <div data-aos='zoom-out' className="frontend">
//           <img src={backend} alt="" srcset="" />
//           <h5>Backend</h5>
//           <div className="comments">
//             <div>
//               <p>
//                 Apart from doing the frontend , I also do the backend well and I
//                 fell very comfortable on the backend side
//               </p>
//               <p>
//                 <b>Languages</b> : Javascript with NodeJs/ExpressJs, Php with Laravel
//               </p>
//             </div>
//           </div>
//         </div>
//         <div data-aos='zoom-out' className="backend">
//           <img src={frontend} alt="" srcset="" />

//           <h5>Frontend</h5>

//           <div className="comments">
//             <div>
//               <p>
//                 I like code things from scratch , and enjoy bringing ideas to
//                 file in browser.
//               </p>

//               <p>
//                 <b>Language</b> : Javascript with VueJs, ReactJs,  , TailwindCss
//               </p>
//             </div>
//           </div>
//         </div>
//         <div data-aos='zoom-out' className="frontend">
//           <img src={backend} alt="" srcset="" />
//           <h5>Sale of electronic equipment</h5>
//           <div className="comments">
//             <div>
//               <p>
//                 Sale of new or used PCs, smartphones and accessories
//               </p>
//               <p>
//                 Personalized advice and after-sales support
//               </p>
//             </div>
//           </div>
//         </div>
//         <div data-aos='zoom-out' className="backend">
//           <img src={uiux} alt="" srcset="" />

//           <h5>UX / UI</h5>

//           <div className="comments">
//             <div>
//               <p>I value simple content structure , clean design patterns .</p>
//               <p>
//                 <b>Tools</b> : Figma , Photoshop
//               </p>
//             </div>
//           </div>
//         </div>
//         <div data-aos='zoom-out' className="frontend">
//           <img src={backend} alt="" srcset="" />
//           <h5>Branding & Visual Identity</h5>
//           <div className="comments">
//             <div>
//               <p>
//                 Logos, chartes graphiques, visuels pour réseaux sociaux
//               </p>
//               <p>
//                 Graphic consistency for businesses and products
//               </p>
//             </div>
//           </div>
//         </div>

//         <div data-aos='zoom-out' className="backend">
//           <img src={backend} alt="" srcset="" />
//           <h5>E-commerce / Online store development</h5>
//           <div className="comments">
//             <div>
//               <p>
//                 Creation and optimization of merchant sites (like BorisTech)
//               </p>
//               <p>
//                 Online payment management (Orange Money, PayPal, bank cards)
//               </p>
//             </div>
//           </div>
//         </div>
//         <div data-aos='zoom-out' className="frontend">
//           <img src={backend} alt="" srcset="" />
//           <h5>Web maintenance and optimization</h5>
//           <div className="comments">
//             <div>
//               <p>
//                 Improved performance, SEO, accessibility
//               </p>
//               <p>
//                 Updating and securing existing sites
//               </p>
//             </div>
//           </div>
//         </div>

//         <div data-aos='zoom-out' className="backend">
//           <img src={backend} alt="" srcset="" />
//           <h5>Digital project management</h5>
//           <div className="comments">
//             <div>
//               <p>
//                 Planning, monitoring and coordination of web projects
//               </p>
//               <p>
//                 Liaison between design, development and client
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



import front from "../assets/front.jpg";
import backend from "../assets/backend.png";
import ux from "../assets/ux.png";
import ecommerce from '../assets/ecommerce.png'
import maintenance from '../assets/maintenance.png'
import branding from '../assets/branding.png'
import ventemateriel from '../assets/ventemateriel.png'
import gestionprojetdigital from '../assets/gestionprojetdigital.png'
import back from '../assets/back.png'
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="Services" className="services">
      <h2>{t('services.title')}</h2>
      <div className="content">
        <div data-aos='zoom-out' className="frontend">
          <img src={back} alt="" srcSet="" />
          <h5>{t('services.backend.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.backend.desc')}</p>
              <p><b>{t('services.backend.languages')}</b></p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="backend">
          <img src={front} alt="" srcSet="" />
          <h5>{t('services.frontend.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.frontend.desc')}</p>
              <p><b>{t('services.frontend.languages')}</b></p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="frontend">
          <img src={ventemateriel} alt="" srcSet="" />
          <h5>{t('services.sale.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.sale.desc1')}</p>
              <p>{t('services.sale.desc2')}</p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="backend">
          <img src={ux} alt="" srcSet="" />
          <h5>{t('services.uxui.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.uxui.desc')}</p>
              <p><b>{t('services.uxui.tools')}</b></p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="frontend">
          <img src={branding} alt="" srcSet="" />
          <h5>{t('services.branding.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.branding.desc1')}</p>
              <p>{t('services.branding.desc2')}</p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="backend">
          <img src={ecommerce} alt="" srcSet="" />
          <h5>{t('services.ecommerce.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.ecommerce.desc1')}</p>
              <p>{t('services.ecommerce.desc2')}</p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="frontend">
          <img src={maintenance} alt="" srcSet="" />
          <h5>{t('services.maintenance.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.maintenance.desc1')}</p>
              <p>{t('services.maintenance.desc2')}</p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="backend">
          <img src={gestionprojetdigital} alt="" srcSet="" />
          <h5>{t('services.project.title')}</h5>
          <div className="comments">
            <div>
              <p>{t('services.project.desc1')}</p>
              <p>{t('services.project.desc2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}