import HeroSection from './_sections/hero-section'
import ExplicarDescreverControlarSection from './_sections/explicar-descrever-controlar'
import VideoHomeSection from './_sections/video-home'
import Interlude from './_sections/interlude'
import AnuncioPlataformaSection from './_sections/anuncio-plataforma'
import ConteudosExclusivosSection from './_sections/conteudos-exclusivos'
import FaqSection from './_sections/faq'

export default function HomePage() {
  return (
    <main className="bg-off-white">
      <HeroSection />
      <ExplicarDescreverControlarSection />
      <VideoHomeSection />
      <Interlude />
      <AnuncioPlataformaSection />
      <ConteudosExclusivosSection />
      <FaqSection />
    </main>
  )
}
