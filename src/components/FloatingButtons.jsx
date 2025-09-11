import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
//import "./FloatingButtons.css"; // le fichier CSS séparé

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-container">
      {isVisible && (
        <>
          {/* Back to Top */}
          <button onClick={scrollToTop} className="floating-btn back-to-top">
            <FaArrowUp size={20} />
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/679135177"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp"
          >
            <FaWhatsapp size={22} />
          </a>
        </>
      )}
    </div>
  );
}
