export default function ConteudosExclusivosSection() {

  return (
    <section className="bg-black">
      <div className="my-8">
        <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 flex flex-col justify-end items-center h-full">
          <div>
            <span className="uppercase font-space-grotesk text-sm text-center block mb-12">Resumo breve</span>
            <h2 className="text-4xl font-utopia-std font-normal text-center mb-12"><span className="text-contextual-pink block">Conteúdos</span> <span className="text-off-white block">exclusivos</span></h2>
            <p className="text-sm font-space-grotesk text-off-white text-center mb-8">Donec elementum, lectus et vehicula auctor, orci risus viverra lacus, a posuere nisi nibh elementum nisl. In ac tincidunt justo.</p>
          </div>
          <div>
            carousel
          </div>
          <div>
            <a className="bg-contextual-pink text-black font-space-grotesk w-52 h-8 mb-4 flex justify-center items-center text-center rounded-md uppercase text-xs tracking-[.2em]">Ver Produtos</a>
          </div>
        </div>
      </div>
    </section>
  )
}