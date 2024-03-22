import HeroSection from "./_sections/hero-section";
import ExplicarDescreverControlarSection from "./_sections/explicar-descrever-controlar";
import VideoHomeSection from "./_sections/video-home";
import AnuncioPlataformaSection from "./_sections/anuncio-plataforma";
import ConteudosExclusivosSection from "./_sections/conteudos-exclusivos";
import FaqSection from "./_sections/faq";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExplicarDescreverControlarSection />
      <VideoHomeSection />
      <AnuncioPlataformaSection />
      <ConteudosExclusivosSection />
      <FaqSection />
    </main>
  );
}
