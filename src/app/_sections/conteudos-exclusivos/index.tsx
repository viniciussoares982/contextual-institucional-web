import Marquee from "react-fast-marquee";
import Image from 'next/image'

export default function ConteudosExclusivosSection() {

  return (
    <section className="bg-black">
      <div className="my-8">
        <div className="max-w-8xl mx-auto flex flex-col justify-end items-center h-full">
          <div>
            <span className="uppercase font-space-grotesk text-sm text-center block mb-12">Resumo breve</span>
            <h2 className="text-4xl font-utopia-std font-normal text-center mb-12"><span className="text-contextual-pink block">Conteúdos</span> <span className="text-off-white block">exclusivos</span></h2>
            <p className="text-sm font-space-grotesk text-off-white text-center mb-8">Donec elementum, lectus et vehicula auctor, orci risus viverra lacus, a posuere nisi nibh elementum nisl. In ac tincidunt justo.</p>
          </div>
          <div className="py-10">
            <Marquee autoFill speed={30} pauseOnClick>
            <Image
              src="/card-pbe.png"
              width={324}
              height={480}
              alt="Picture of the author"
              className="ml-14 object-fill"
            />
            <Image
              src="/card-tratamento-tdah.png"
              width={324}
              height={480}
              alt="Picture of the author"
              className="pt-14 ml-14 object-fill"
            />
            <Image
              src="/card-tratamento-funcional.png"
              width={324}
              height={480}
              alt="Picture of the author"
              className="ml-14 object-fill"
            />
            <Image
              src="/card-criar-conteudo.png"
              width={324}
              height={480}
              alt="Picture of the author"
              className="pt-14 ml-14 object-fill"
            />
            </Marquee>
          </div>
          <div>
            <a className="bg-contextual-pink text-black font-space-grotesk w-52 h-8 mb-4 flex justify-center items-center text-center rounded-md uppercase text-xs tracking-[.2em]">Explorar Conteúdos</a>
          </div>
        </div>
      </div>
    </section>
  )
}