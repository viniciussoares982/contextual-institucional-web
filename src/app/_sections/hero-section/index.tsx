import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-off-white">
      <div className="h-screen bg-[url('/background_hero_contextual4.png')] bg-cover bg-center">
        <div className="max-w-8xl mx-auto flex h-full flex-col items-center justify-end px-7 py-28 sm:px-6 md:px-8">
          <div className="mb-28">
            <h1 className="mb-6 text-center font-utopia-std text-5xl font-semibold tracking-tight text-black md:text-6xl">
              Inovação e praticidade para psicólogos
            </h1>
            <p className="text-center font-space-grotesk text-lg text-black md:text-2xl">
              Aprenda a ser eficiente
              <span className="block">Ofereça o melhor tratamento</span>
              Se profissionalize com a Contextual
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/"
              className="mb-4 flex h-12 w-52 items-center justify-center rounded-md border border-black bg-contextual-pink text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black lg:w-96"
            >
              Entre na Comunidade
            </a>
            <Link
              href="#conteudos-exclusivos"
              scroll
              className="flex h-12 w-52 items-center justify-center rounded-md border border-black bg-transparent text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black lg:w-96"
            >
              Explorar Conteúdos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
