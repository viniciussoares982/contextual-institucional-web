export default function HeroSection() {
  return (
    <section className="bg-off-white">
      <div className="h-[740px] bg-[url('/background_hero_contextual4.png')] bg-cover bg-center">
        <div className="max-w-8xl mx-auto flex h-full flex-col items-center justify-end px-7 py-28 sm:px-6 md:px-8">
          <div className="mb-28">
            <h1 className="mb-6 text-center font-utopia-std text-5xl font-semibold tracking-[-0.06em] text-black md:text-6xl">
              Chamada de impacto principal
            </h1>
            <p className="text-center font-space-grotesk text-lg text-black md:text-2xl">
              Frase breve para reforçar
              <span className="block">mensagem principal da marca e</span>
              prender a atenção do usuário
            </p>
          </div>
          <div className="mt-6">
            <a className="mb-4 flex h-8 w-52 items-center justify-center rounded-md border border-black bg-contextual-pink text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black">
              Ver Produtos
            </a>
            <a className="flex h-8 w-52 items-center justify-center rounded-md border border-black bg-transparent text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black">
              Explorar Conteúdos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
