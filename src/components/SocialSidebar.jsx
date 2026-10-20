import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/679135177",
    icon: <FaWhatsapp size={18} />,
    className: "whatsapp",
    label: "WhatsApp",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/boris-aubin-simo",
    icon: <FaLinkedinIn size={18} />,
    className: "linkedin",
    label: "LinkedIn",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/aubinboris.simo.9/",
    icon: <FaFacebookF size={18} />,
    className: "facebook",
    label: "Facebook",
  },
];

export default function SocialSidebar() {
  return (
    <aside className="social-sidebar" aria-label="Réseaux sociaux">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link ${social.className}`}
          title={social.label}
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </aside>
  );
}
