import Image from "next/image";

export default function FootSection() {
  return (
    <section className="bg-contextual-pink">
      <div className="h-[466px]">
        <div className="max-w-8xl mx-auto flex h-full flex-col justify-start px-7 py-9 sm:px-6 md:justify-between md:px-8">
          <div className="md:flex md:justify-between">
            <div className="item mb-16">
              <Image
                src="/contextual_logo.svg"
                width={103}
                height={119}
                alt="logo contextual"
                className="lg:hidden"
              />
              <Image
                src="/contextual_logo.svg"
                width={200}
                height={172}
                alt="logo contextual"
                className="hidden lg:block"
              />
            </div>
            <div className="mb-9">
              <p className="mb-5 font-space-grotesk text-lg uppercase text-black">
                Contato
              </p>
              <div className="mb-3 w-16 border border-black font-space-grotesk text-lg uppercase text-black"></div>
              <p className="mb-1 font-space-grotesk text-sm uppercase text-black">
                (00) 00000 0000
              </p>
              <p className="font-space-grotesk text-sm text-black">
                contato@contextual.com
              </p>
            </div>
            <div className="mb-9 flex w-[150px] flex-row justify-start">
              <div className="mr-7">
                <Image
                  src="/insta.svg"
                  width={32}
                  height={32}
                  alt="instagram logo"
                />
              </div>
              <div className="mr-7">
                <Image
                  src="/yt.svg"
                  width={32}
                  height={32}
                  alt="youtube logo"
                />
              </div>
              <div>
                <Image
                  src="/linkedin.svg"
                  width={32}
                  height={32}
                  alt="linkedin logo"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-6 w-auto border border-white"></div>
            <div>
              <p className="mb-1 text-center font-space-grotesk text-sm uppercase">
                Contextual - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
