

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