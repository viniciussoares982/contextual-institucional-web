export default function VideoHomeSection() {
  return (
    <section className="bg-off-white">
      <div className="">
        <div className="max-w-8xl mx-auto flex h-full flex-col items-center justify-start py-9 md:py-14">
          <div className="mt-8">
            <p className="mb-3 font-space-grotesk text-2xl text-black md:text-4xl">
              Conheça a Contextual
            </p>
          </div>
          <div className="h-64 w-full bg-dark-gray md:h-[545px] md:w-[920px]"></div>
          <div className="mt-14 md:flex md:w-full md:flex-col md:items-center">
            <a
              href="/"
              className="mb-4 flex h-12 w-80 items-center justify-center rounded-md border border-black bg-contextual-pink text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black lg:w-3/5"
            >
              Entre na Comunidade
            </a>
            <a
              href="#conteudos-exclusivos"
              className="flex h-12 w-80 items-center justify-center rounded-md border border-black bg-transparent text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black lg:w-3/5"
            >
              Tire suas Duvidas no Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
