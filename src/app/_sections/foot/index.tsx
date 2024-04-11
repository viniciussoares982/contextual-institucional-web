import Image from 'next/image'  

export default function FootSection() {

  return (
    <section className="bg-contextual-pink">
      <div className="h-[466px]" >
        <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 flex flex-col justify-start h-full py-9 md:justify-between">
          <div className='md:flex md:justify-between'>
            <div className="mb-16 item">
                  <Image
                    src="/contextual_logo.svg"
                    width={103}
                    height={119}
                    alt="logo contextual"
                    className='lg:hidden'
                  />
                  <Image
                    src="/contextual_logo.svg"
                    width={200}
                    height={172}
                    alt="logo contextual"
                    className='hidden lg:block'
                  />
            </div>
            <div className="mb-9">
              <p className="text-black text-lg font-space-grotesk uppercase mb-5">Contato</p>
              <div className="text-black text-lg font-space-grotesk uppercase mb-3 border border-black w-16"></div>
              <p className="text-black text-sm font-space-grotesk uppercase mb-1">(00) 00000 0000</p>
              <p className="text-black text-sm font-space-grotesk">contato@contextual.com</p>
            </div>
            <div className="flex flex-row justify-start w-[150px] mb-9">
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
            <div className="mb-6 border border-white w-auto"></div>
            <div>
              <p className="text-sm font-space-grotesk uppercase mb-1 text-center">Contextual - Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}