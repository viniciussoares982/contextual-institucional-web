import Marquee from "react-fast-marquee";

export default function Interlude() {
  return (
    <section className="bg-contextual-pink">
      <div className="h-[60px] md:h-[91px]">
        <div className="flex flex-row justify-start py-5 md:py-[30px]">
          <Marquee autoFill speed={30} pauseOnClick>
            <p className="pr-16 font-space-grotesk text-sm uppercase tracking-[.2em] text-black md:pr-28 md:text-2xl">
              Psicologia
            </p>
            <p className="pr-16 font-space-grotesk text-sm uppercase text-black md:pr-28 md:text-2xl">
              {"//"}
            </p>
            <p className="pr-16 font-space-grotesk text-sm uppercase tracking-[.2em] text-black md:pr-28 md:text-2xl">
              Conteúdo
            </p>
            <p className="pr-16 font-space-grotesk text-sm uppercase text-black md:pr-28 md:text-2xl">
              {"//"}
            </p>
            <p className="pr-16 font-space-grotesk text-sm uppercase tracking-[.2em] text-black md:pr-28 md:text-2xl">
              Curso
            </p>
            <p className="pr-16 font-space-grotesk text-sm uppercase text-black md:pr-28 md:text-2xl">
              {"//"}
            </p>
            <p className="pr-16 font-space-grotesk text-sm uppercase tracking-[.2em] text-black md:pr-28 md:text-2xl">
              Tecnologia
            </p>
            <p className="pr-16 font-space-grotesk text-sm uppercase text-black md:pr-28 md:text-2xl">
              {"//"}
            </p>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
