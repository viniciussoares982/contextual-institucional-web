import Image from 'next/image'

export default function AnuncioPlataformaSection() {
  return (
    <section className="bg-off-white">
      <div>
        <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 xl:p-48 flex flex-col justify-start items-center h-full py-9">
          <div className="w-full border border-black rounded-3xl mt-8 relative">
            <div className="px-6 py-9 xl:px-12 xl:py-24 h-full flex flex-col justify-start items-center">
              <div>
                <p className="text-black text-xs md:text-base font-space-grotesk text-center leading-5 uppercase tracking-[.2em]">Resumo breve para <span className="block md:inline">atrair o foco</span></p>
                <p className="text-black text-5xl md:text-6xl font-space-grotesk text-center leading-10 mt-9 md:mt-0">Nome da <span className="text-contextual-pink block md:inline">plataforma</span></p>
              </div>
              <div className='md:grid md:grid-cols-12 md:mt-16'>
                <div className="flex justify-center items-center md:col-span-7">
                  <Image
                    src="/platform-example-mobile.png"
                    width={330}
                    height={254}
                    className='md:hidden'
                    alt="Ilustração apresentando a plataforma em diversos dispositivos."
                  />
                  <Image
                    src="/platform-example-mobile.png"
                    width={468}
                    height={360}
                    className='hidden md:block'
                    alt="Ilustração apresentando a plataforma em diversos dispositivos."
                  />
                </div>
                <div className='md:col-span-4'>
                  <div>
                    <p className="text-text-gray font-space-grotesk text-center md:text-left text-base leading-[18px] md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tortor scelerisque, tincidunt urna vel, laoreet neque. Fusce vel massa ac nulla commodo bibendum. Ut in augue orci.</p>
                  </div>
                  <p className="text-text-gray font-space-grotesk text-center md:text-left uppercase mt-8 text-sm leading-4 tracking-[.1em]">de R$234,00 por:</p>
                  <p className="text-contextual-pink font-utopia-std text-center md:text-left font-bold uppercase mt-2 text-5xl leading-[48px] tracking-[.0.5em]">R$180,00</p>
                  <p className="text-black font-utopia-std text-center md:text-left uppercase mt-1 text-sm leading-4 tracking-[.1em]">ou <span className="text-contextual-pink">12x de R$15,00</span></p>
                  <div className='flex justify-center md:justify-start'>
                    <a className="bg-contextual-pink text-black font-space-grotesk w-52 h-8 mt-6 flex justify-center items-center text-center md:text-left border border-none rounded-md uppercase text-xs tracking-[.2em]">adquira agora</a>
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