// import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// const socials = [
//   {
//     name: "WhatsApp",
//     href: "https://wa.me/679135177",
//     icon: <FaWhatsapp size={18} />,
//     className: "whatsapp",
//     label: "WhatsApp",
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/boris-aubin-simo",
//     icon: <FaLinkedinIn size={18} />,
//     className: "linkedin",
//     label: "LinkedIn",
//   },
//   {
//     name: "Facebook",
//     href: "https://www.facebook.com/aubinboris.simo.9/",
//     icon: <FaFacebookF size={18} />,
//     className: "facebook",
//     label: "Facebook",
//   },
// ];

// export default function SocialSidebar() {
//   return (
//     <aside className="social-sidebar" aria-label="Réseaux sociaux">
//       {socials.map((social) => (
//         <a
//           key={social.name}
//           href={social.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`social-link ${social.className}`}
//           title={social.label}
//           aria-label={social.label}
//         >
//           {social.icon}
//         </a>
//       ))}
//     </aside>
//   );
// }



import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaShareAlt,
  FaCheck,
} from "react-icons/fa";

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
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    // Partage natif sur mobile / navigateurs compatibles
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Boris Aubin Simo - Software Engineer",
          text: "Découvrez le portfolio de Boris Aubin Simo.",
          url: url,
        });
      } catch (error) {
        // L'utilisateur a simplement fermé la fenêtre de partage
        if (error.name !== "AbortError") {
       //   console.error("Erreur lors du partage :", error);
        }
      }

      return;
    }

    // Sinon : copie du lien
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
     // console.error("Impossible de copier le lien :", error);
    }
  };

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

      {/* Bouton partager / copier */}
      <button
        type="button"
        className={`social-link share-link ${copied ? "copied" : ""}`}
        onClick={handleShare}
        title={copied ? "Lien copié" : "Partager ce portfolio"}
        aria-label={copied ? "Lien copié" : "Partager ce portfolio"}
      >
        {copied ? <FaCheck size={18} /> : <FaShareAlt size={18} />}
      </button>
    </aside>
  );
}

