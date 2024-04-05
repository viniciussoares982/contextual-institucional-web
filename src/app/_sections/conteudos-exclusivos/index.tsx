import Marquee from "react-fast-marquee";
import Image from 'next/image'

export default function ConteudosExclusivosSection() {

  return (
    <section className="bg-transparent">
      <div className="bg-black rounded-2xl">
          <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 flex flex-col justify-end items-center h-full py-9 md:py-24">
            <div>
              <span className="uppercase font-space-grotesk text-sm md:text-lg text-center block mb-12 md:mb-3 tracking-[.2em]">Resumo breve</span>
              <h2 className="text-4xl md:text-7xl font-space-grotesk font-normal text-center mb-7"><span className="text-contextual-pink block md:inline">Conteúdos</span> <span className="text-off-white block md:inline">exclusivos</span></h2>
              <p className="text-sm md:text-xl font-normal font-space-grotesk text-off-white text-center leading-6 md:leading-7 h-20 w-80 md:w-[740px]">Donec elementum, lectus et vehicula auctor, orci risus viverra lacus, a posuere nisi nibh elementum nisl. In ac tincidunt justo.</p>
            </div>
            <div className="pb-14 md:pb-20">
              <Marquee autoFill speed={30} pauseOnClick>
              <Image
                src="/card-pbe.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="ml-8 object-fill md:hidden"
              />
              <Image
                src="/card-pbe_md.png"
                width={325}
                height={481}
                alt="Picture of the author"
                className="ml-14 object-fill hidden md:block"
              />
              <Image
                src="/card-tratamento-tdah.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="pt-14 ml-8 object-fill md:hidden"
              />
              <Image
                src="/card-tratamento-tdah_md.png"
                width={325}
                height={481}
                alt="Picture of the author"
                className="pt-14 ml-14 object-fill hidden md:block"
              />
              <Image
                src="/card-tratamento-funcional.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="ml-8 object-fill md:hidden"
              />
              <Image
                src="/card-tratamento-funcional_md.png"
                width={325}
                height={481}
                alt="Picture of the author"
                className="ml-14 object-fill hidden md:block"
              />
              <Image
                src="/card-criar-conteudo.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="pt-14 ml-8 object-fill md:hidden"
              />
              <Image
                src="/card-criar-conteudo_md.png"
                width={325}
                height={481}
                alt="Picture of the author"
                className="pt-14 ml-14 object-fill hidden md:block"
              />
              </Marquee>
            </div>
            <div>
              <a className="bg-contextual-pink text-black font-space-grotesk w-52 md:w-72 h-8 md:h-14 mb-4 md:mb-0 flex justify-center items-center text-center rounded-md uppercase text-xs md:text-lg tracking-[.2em]">Ver Produtos</a>
            </div>
          </div>
        </div>
    </section>
  )
}