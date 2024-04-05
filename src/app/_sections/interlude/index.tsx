import Marquee from "react-fast-marquee";

export default function Interlude() {

  return (
    <section className="bg-contextual-pink">
      <div className="h-[60px] md:h-[91px]" >
        <div className="flex flex-row justify-start py-5 md:py-[30px]">
        <Marquee autoFill speed={30} pauseOnClick>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28 tracking-[.2em]">Psicologia</p>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28">{'//'}</p>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28 tracking-[.2em]">Conteúdo</p>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28">{'//'}</p>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28 tracking-[.2em]">Curso</p>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28">{'//'}</p>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28 tracking-[.2em]">Tecnologia</p>
          <p className="text-black text-sm md:text-2xl font-space-grotesk uppercase pr-16 md:pr-28">{'//'}</p>
        </Marquee>
        </div>
      </div>
    </section>
  )
}