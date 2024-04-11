import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function ConteudosExclusivosSection() {
  return (
    <section className="bg-transparent">
      <div className="rounded-2xl bg-black">
        <div className="max-w-8xl mx-auto flex h-full flex-col items-center justify-end px-7 py-9 sm:px-6 md:px-8 md:py-24">
          <div>
            <span className="mb-12 block text-center font-space-grotesk text-sm uppercase tracking-[.2em] md:mb-3 md:text-lg">
              Resumo breve
            </span>
            <h2 className="mb-7 text-center font-space-grotesk text-4xl font-normal md:text-7xl">
              <span className="block text-contextual-pink md:inline">
                Conteúdos
              </span>{" "}
              <span className="block text-off-white md:inline">exclusivos</span>
            </h2>
            <p className="h-20 w-80 text-center font-space-grotesk text-sm font-normal leading-6 text-off-white md:w-[740px] md:text-xl md:leading-7">
              Donec elementum, lectus et vehicula auctor, orci risus viverra
              lacus, a posuere nisi nibh elementum nisl. In ac tincidunt justo.
            </p>
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
                className="ml-14 hidden object-fill md:block"
              />
              <Image
                src="/card-tratamento-tdah.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="ml-8 object-fill pt-14 md:hidden"
              />
              <Image
                src="/card-tratamento-tdah_md.png"
                width={325}
                height={481}
                alt="Picture of the author"
                className="ml-14 hidden object-fill pt-14 md:block"
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
                className="ml-14 hidden object-fill md:block"
              />
              <Image
                src="/card-criar-conteudo.png"
                width={180}
                height={265}
                alt="Picture of the author"
                className="ml-8 object-fill pt-14 md:hidden"
              />
              <Image
                src="/card-criar-conteudo_md.png"
                width={325}
                height={481}
                alt="Picture of the author"
                className="ml-14 hidden object-fill pt-14 md:block"
              />
            </Marquee>
          </div>
          <div>
            <a className="mb-4 flex h-8 w-52 items-center justify-center rounded-md bg-contextual-pink text-center font-space-grotesk text-xs uppercase tracking-[.2em] text-black md:mb-0 md:h-14 md:w-72 md:text-lg">
              Ver Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
