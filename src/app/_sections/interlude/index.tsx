import Marquee from "react-fast-marquee";

export default function Interlude() {

  return (
    <section className="bg-contextual-pink">
      <div className="h-[60px]" >
        <div className="flex flex-row justify-start py-5">
        <Marquee autoFill speed={30} pauseOnClick>
          <p className="text-black text-sm font-space-grotesk uppercase pr-16 tracking-[.2em]">Psicologia</p>
          <p className="text-black text-sm font-space-grotesk uppercase pr-16 ">{'//'}</p>
          <p className="text-black text-sm font-space-grotesk uppercase pr-16 tracking-[.2em]">Conteúdo</p>
          <p className="text-black text-sm font-space-grotesk uppercase pr-16">{'//'}</p>
        </Marquee>
        </div>
      </div>
    </section>
  )
}