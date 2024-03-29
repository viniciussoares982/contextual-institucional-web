import HeroSection from "./_sections/hero-section";
import ExplicarDescreverControlarSection from "./_sections/explicar-descrever-controlar";
import VideoHomeSection from "./_sections/video-home";
import Interlude from "./_sections/interlude";
import AnuncioPlataformaSection from "./_sections/anuncio-plataforma";
import ConteudosExclusivosSection from "./_sections/conteudos-exclusivos";
import FaqSection from "./_sections/faq";
import FootSection from "./_sections/foot";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExplicarDescreverControlarSection />
      <VideoHomeSection />
      <Interlude />
      <AnuncioPlataformaSection />
      <ConteudosExclusivosSection />
      <FaqSection />
      <FootSection />
    </main>
  );
}
