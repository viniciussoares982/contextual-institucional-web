import Image from 'next/image'

export default function AnuncioPlataformaSection() {
  return (
    <section className="bg-off-white">
      <div className="h-[850px]">
        <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 flex flex-col justify-start items-center h-full py-9">
          <div className="w-full h-[715px] border border-black rounded-3xl mt-8 relative">
            <div className="px-6 py-9 h-full flex flex-col justify-start items-center">
              <p className="text-black text-xs font-space-grotesk text-center leading-5 uppercase tracking-[.2em]">Resumo breve para <span className="block">atrair o foco</span></p>
              <p className="text-black text-5xl font-space-grotesk text-center leading-10 mt-9">Nome da<span className="text-contextual-pink block">plataforma</span></p>
              <div className="flex justify-center items-center">
                <div className="relative -top-3">
                  <Image
                    src="/macbook.png"
                    width={232}
                    height={233}
                    alt="Imagem de um MacBook"
                  />
                </div>
                <div className="relative -ml-12 top-10 -left-8">
                  <Image
                    src="/ipad.png"
                    width={162}
                    height={162}
                    alt="Imagem de um iPad"
                  />
                </div>
                <div className="relative -ml-12 -top-3 -left-4">
                  <Image
                    src="/iphone.png"
                    width={57}
                    height={100}
                    alt="Imagem de um iPhone"
                  />
                </div>
              </div>
              <div className="w-[317px] h-[87px]">
                <p className="text-text-gray font-space-grotesk text-center text-base leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tortor scelerisque, tincidunt urna vel, laoreet neque. Fusce vel massa ac nulla commodo bibendum. Ut in augue orci.</p>
              </div>
              <p className="text-text-gray font-space-grotesk text-center uppercase mt-8 text-sm leading-4 tracking-[.1em]">de R$234,00 por:</p>
              <p className="text-contextual-pink font-utopia-std text-center font-bold uppercase mt-2 text-5xl leading-[48px] tracking-[.0.5em]">R$180,00</p>
              <p className="text-black font-utopia-std text-center uppercase mt-1 text-sm leading-4 tracking-[.1em]">ou <span className="text-contextual-pink">12x de R$15,00</span></p>
              <div>
                <a  className="bg-contextual-pink text-black font-space-grotesk w-52 h-8 mt-6 flex justify-center items-center text-center border border-black rounded-md uppercase text-xs tracking-[.2em]">adquira agora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}