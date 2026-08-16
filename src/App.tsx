import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./sections/Hero";
import { Credibility } from "./sections/Credibility";
import { About } from "./sections/About";
import { FeaturedProject } from "./sections/FeaturedProject";
import { Research } from "./sections/Research";
import { Nurai } from "./sections/Nurai";
import { Achievements } from "./sections/Achievements";
import { Team } from "./sections/Team";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useLanguage } from "./providers/LanguageProvider";
import { useT } from "./content/site";
import { PaperViewer } from "./components/PaperViewer";

export default function App() {
  const { lang } = useLanguage();
  const t = useT(lang);

  useEffect(() => {
    document.title = t.meta.title;
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", lang === "ar" ? "ar_AR" : "en_US");
  }, [lang, t.meta.title]);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-contrast"
      >
        {t.a11y.skipToContent}
      </a>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Credibility />
        <About />
        <FeaturedProject />
        <Research />
        <Nurai />
        <Achievements />
        <Team />
        <Contact />
      </main>

      <Footer />
      <PaperViewer />
    </>
  );
}
