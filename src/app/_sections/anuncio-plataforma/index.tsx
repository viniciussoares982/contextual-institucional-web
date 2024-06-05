import Image from 'next/image'

export default function AnuncioPlataformaSection() {
  return (
    <section className="bg-off-white">
      <div>
        <div className="max-w-8xl mx-auto flex h-full flex-col items-center justify-start px-7 py-9 sm:px-6 md:px-8 xl:p-48">
          <div className="relative mt-8 w-full rounded-3xl border border-black">
            <div className="flex h-full flex-col items-center justify-start px-6 py-9 xl:px-12 xl:py-24">
              <div>
                <p className="text-center font-space-grotesk text-xs uppercase leading-5 tracking-[.2em] text-black md:text-base">
                  Dê o primeiro passo agora
                </p>
                <p className="mt-9 text-center font-space-grotesk text-5xl leading-10 text-black md:mt-0 md:text-6xl">
                  <span className="text-contextual-pink">Caminho</span> do{' '}
                  <span className="block text-black md:inline">Psicólogo</span>
                </p>
              </div>
              <div className="md:mt-16 md:grid md:grid-cols-12">
                <div className="flex items-center justify-center md:col-span-7">
                  <Image
                    src="/platform-example-mobile.png"
                    width={330}
                    height={254}
                    className="md:hidden"
                    alt="Ilustração apresentando a plataforma em diversos dispositivos."
                  />
                  <Image
                    src="/platform-example-mobile.png"
                    width={468}
                    height={360}
                    className="hidden md:block"
                    alt="Ilustração apresentando a plataforma em diversos dispositivos."
                  />
                </div>
                <div className="md:col-span-4">
                  <div>
                    <p className="text-center font-space-grotesk text-base leading-[18px] text-text-gray md:text-left md:text-xl">
                      Facilite seu trabalho e “compre tempo” - adquira nossos
                      com uma plataforma simples como o Notion, ensino você a
                      poupar o recurso mais valioso de todos nós: o tempo.
                    </p>
                  </div>
                  <p className="mt-8 text-center font-space-grotesk text-sm uppercase leading-4 tracking-[.1em] text-text-gray md:text-left">
                    de R$234,00 por:
                  </p>
                  <p className="mt-2 text-center font-utopia-std text-5xl font-bold uppercase leading-[48px] tracking-[.0.5em] text-contextual-pink md:text-left">
                    R$180,00
                  </p>
                  <p className="mt-1 text-center font-utopia-std text-sm uppercase leading-4 tracking-[.1em] text-black md:text-left">
                    ou{' '}
                    <span className="text-contextual-pink">12x de R$15,00</span>
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <a className="mt-6 flex h-8 w-52 items-center justify-center rounded-md border border-none bg-contextual-pink text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black md:text-left">
                      Entre na comunidade
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
