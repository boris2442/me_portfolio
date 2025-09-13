

import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xgvldnwn");

  const onSubmit = async (e) => {
    await handleSubmit(e);
    if (state.succeeded) {
      toast.success(t('contact.success'), {
        style: { fontSize: '12px' }
      });
    } else if (state.errors && state.errors.length > 0) {
      toast.error(t('contact.error'), {
        style: { fontSize: '12px' }
      });
    }
  };

  return (
    <section id="Contact" className="contact">
      <h2>{t('contact.title')}</h2>
      <form onSubmit={onSubmit} data-aos='zoom-in'>
        <div>
          <label htmlFor="name">{t('contact.name')}</label>
          <input name="name" type="text" id='name' required />
        </div>
        <div>
          <label htmlFor="email">{t('contact.email')}</label>
          <input name="email" type="email" id='email' required />
        </div>
        <div>
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea name="message" id="message" cols="22" rows="4" required></textarea>
        </div>
        <div>
          <button type='submit' disabled={state.submitting}>
            {state.submitting ? t('contact.sending') : t('contact.send')}
          </button>
        </div>
      </form>
    </section>
  );
}