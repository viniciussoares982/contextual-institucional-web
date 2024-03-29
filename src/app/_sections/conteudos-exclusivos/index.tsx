import Marquee from "react-fast-marquee";
import Image from 'next/image'

export default function ConteudosExclusivosSection() {

  return (
    <section className="bg-transparent relative top-4">
      <div className="bg-black rounded-2xl">
          <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 flex flex-col justify-end items-center h-full py-9">
            <div>
              <span className="uppercase font-space-grotesk text-sm text-center block mb-12">Resumo breve</span>
              <h2 className="text-4xl font-space-grotesk font-normal text-center mb-7"><span className="text-contextual-pink block">Conteúdos</span> <span className="text-off-white block">exclusivos</span></h2>
              <p className="text-sm font-normal font-space-grotesk text-off-white text-center leading-6 h-20 w-80">Donec elementum, lectus et vehicula auctor, orci risus viverra lacus, a posuere nisi nibh elementum nisl. In ac tincidunt justo.</p>
            </div>
            <div className="pb-14">
              <Marquee autoFill speed={30} pauseOnClick>
              <Image
                src="/card-pbe.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="ml-8 object-fill"
              />
              <Image
                src="/card-tratamento-tdah.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="pt-14 ml-8 object-fill"
              />
              <Image
                src="/card-tratamento-funcional.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="ml-8 object-fill"
              />
              <Image
                src="/card-criar-conteudo.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="pt-14 ml-8 object-fill"
              />
              </Marquee>
            </div>
            <div>
              <a className="bg-contextual-pink text-black font-space-grotesk w-52 h-8 mb-4 flex justify-center items-center text-center rounded-md uppercase text-xs tracking-[.2em]">Ver Produtos</a>
            </div>
          </div>
        </div>
    </section>
  )
}