// export default function () {
//   return (
//     <section id="Experiences" className="experiences">
//       <h2>Work Experiences</h2>
//       <div className="content">
//         <div data-aos='zoom-in' className="frontend">
//           <div className="hr-line"></div>
//           <span>2024 - Now</span>
//           <div className="comments">
//             <h5>Frontend</h5>
//             <p>
//               Build the front-end portion of websites and web applications. <br /> The part users see and interact with.
//             </p>
//             <div className="pourcentage">
//               <div>
//                 <div className="react">
//                   <span>React Js</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="tailwind">
//                   <span>TailwindCss</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="redux">
//                   <span>Vue.js</span>
//                 </div>
//               </div>
//               {/* <div>
//                 <div className="bootstrap">
//                   <span>Bootstrap</span>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//         <div data-aos='zoom-in' className="ui-ux">
//           <div className="hr-line"></div>
//           <span>2024 - Now</span>
//           <div className="comments">
//             <h5>UX / UI</h5>
//             <p>
//               Interactive and visual design principles on websites and web applications for a positive and cohesive user experience.
//             </p>
//             <div className="pourcentage">
//               <div>
//                 <div className="figma">
//                   <span>Figma</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="adobe">
//                   <span>Adobe Xd</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="canva">
//                   <span>Canvas</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="photoshop">
//                   <span>Photoshop</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div data-aos='zoom-in' className="backend">
//           <div className="hr-line"></div>
//           <span>2024 - Now</span>
//           <div className="comments">
//             <h5>Backend</h5>
//             <p>
//               Build and maintain the mechanisms that process data , security and perform actions on websites.
//             </p>
//             <div className="pourcentage">
//               <div>
//                 <div className="typescript">
//                   <span>Laravel</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="node">
//                   <span>NodeJs</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="express">
//                   <span>Express Js</span>
//                 </div>
//               </div>
//               <div>
//                 <div className="mongo">
//                   <span>Mongo DB ( Mongoose )</span>
//                 </div>
//               </div>


//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="Experiences" className="experiences">
      <h2>{t('experiences.title')}</h2>
      <div className="content">
        <div data-aos='zoom-in' className="frontend">
          <div className="hr-line"></div>
          <span>{t('experiences.period')}</span>
          <div className="comments">
            <h5>{t('experiences.frontend.title')}</h5>
            <p>{t('experiences.frontend.desc')}</p>
            <div className="pourcentage">
              <div>
                <div className="react">
                  <span>{t('experiences.frontend.skills.0')}</span>
                </div>
              </div>
              <div>
                <div className="tailwind">
                  <span>{t('experiences.frontend.skills.1')}</span>
                </div>
              </div>
              <div>
                <div className="redux">
                  <span>{t('experiences.frontend.skills.2')}</span>
                </div>
              </div>
              {/* <div>
                <div className="bootstrap">
                  <span>Bootstrap</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div data-aos='zoom-in' className="ui-ux">
          <div className="hr-line"></div>
          <span>{t('experiences.period')}</span>
          <div className="comments">
            <h5>{t('experiences.uiux.title')}</h5>
            <p>{t('experiences.uiux.desc')}</p>
            <div className="pourcentage">
              <div>
                <div className="figma">
                  <span>{t('experiences.uiux.skills.0')}</span>
                </div>
              </div>
              <div>
                <div className="adobe">
                  <span>{t('experiences.uiux.skills.1')}</span>
                </div>
              </div>
              <div>
                <div className="canva">
                  <span>{t('experiences.uiux.skills.2')}</span>
                </div>
              </div>
              <div>
                <div className="photoshop">
                  <span>{t('experiences.uiux.skills.3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos='zoom-in' className="backend">
          <div className="hr-line"></div>
          <span>{t('experiences.period')}</span>
          <div className="comments">
            <h5>{t('experiences.backend.title')}</h5>
            <p>{t('experiences.backend.desc')}</p>
            <div className="pourcentage">
              <div>
                <div className="typescript">
                  <span>{t('experiences.backend.skills.0')}</span>
                </div>
              </div>
              <div>
                <div className="node">
                  <span>{t('experiences.backend.skills.1')}</span>
                </div>
              </div>
              <div>
                <div className="express">
                  <span>{t('experiences.backend.skills.2')}</span>
                </div>
              </div>
              <div>
                <div className="mongo">
                  <span>{t('experiences.backend.skills.3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}