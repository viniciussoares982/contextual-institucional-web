export default function HeroSection() {

  return (
    <section className="bg-off-white">
      <div className="h-[740px] bg-[url('/background_hero_contextual4.png')] bg-cover bg-center">
        <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 flex flex-col justify-end items-center h-full py-28">
          <div className="mb-28">
            <h1 className="text-black text-5xl font-utopia-std font-semibold tracking-[-0.06em] text-center mb-6">Chamada de impacto principal</h1>
            <p  className="text-black text-lg font-space-grotesk text-center">Frase breve para reforçar<span className="block">mensagem principal da marca e</span>prender a atenção do usuário</p>
          </div>
          <div className="mt-6">
            <a  className="bg-contextual-pink text-black font-space-grotesk w-52 h-8 mb-4 flex justify-center items-center text-center border border-black rounded-md uppercase text-xs tracking-[.2em]">Ver Produtos</a>
            <a  className="bg-transparent text-black font-space-grotesk w-52 h-8 flex justify-center items-center text-center border border-black rounded-md uppercase text-xs tracking-[.2em]">Explorar Conteúdos</a>
          </div>
        </div>
      </div>
    </section>
  )
}