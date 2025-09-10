import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';


export default function Contact() {
  const [state, handleSubmit] = useForm("xgvldnwn");

  const onSubmit = async (e) => {
    await handleSubmit(e);
    if (state.succeeded) {
      toast.success('Your email has been sent successfully.', {
        style: { fontSize: '12px' }
      });
    } else if (state.errors && state.errors.length > 0) {
      toast.error('Une erreur est survenue !', {
        style: { fontSize: '12px' }
      });
    }
  };

  return (
    <section id="Contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit} data-aos='zoom-in'>
        <div>
          <label htmlFor="name">Your Name</label>
          <input name="name" type="text" id='name' required />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input name="email" type="email" id='email' required />

        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" cols="22" rows="4" required></textarea>
        </div>
        <div>
          <button type='submit' disabled={state.submitting}>{state.submitting ? 'Envoi...' : 'Envoyer'}</button>
        </div>
      </form>
    </section>
  );
}