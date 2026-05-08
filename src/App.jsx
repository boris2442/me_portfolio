import { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async"; // 1. Importer Helmet
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import "./styles/css/index.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  // 2. Préparer les données JSON-LD (Schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Boris Aubin SIMO TSEBO",
    url: "https://borisaubin.vercel.app",
    image: "https://borisaubin.vercel.app/assets/me.png",
    jobTitle: [
      "Développeur Full Stack",
      "Chef de projet digital",
      "Entrepreneur",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Boris Tech",
    },
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Métadonnées de base */}
        <title>Aubin Boris Simo | Développeur Full Stack & Designer</title>
        <meta
          name="description"
          content="Portfolio professionnel de Boris Aubin : Développeur Full Stack, Chef de projet et Designer UI/UX au Cameroun."
        />
        <meta
          name="keywords"
          content="CV développeur, Laravel, React, Cameroun, Boris Aubin"
        />
        <link rel="canonical" href="https://borisaubin.vercel.app/" />

        {/* Open Graph / LinkedIn */}
        <meta
          property="og:title"
          content="Boris Aubin SIMO TSEBO | Portfolio & CV"
        />
        <meta
          property="og:description"
          content="Découvrez mes projets innovants et mon expertise en développement web."
        />
        <meta
          property="og:image"
          content="https://borisaubin.vercel.app/assets/me.png"
        />
        <meta property="og:url" content="https://borisaubin.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boris Aubin SIMO TSEBO" />
        <meta
          name="twitter:image"
          content="https://borisaubin.vercel.app/assets/me.png"
        />

        {/* JSON-LD (Données structurées) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Experiences />
        <Projects />
        <Contact />
        <Toaster />
      </main>
      <Footer />
      <FloatingButtons />
    </HelmetProvider>
  );
}

export default App;
