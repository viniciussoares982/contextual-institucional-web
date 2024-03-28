import FaqComponent from "@/components/Faq";

export default function FaqSection() {

  const faq = [
    {
      question: 'Primeira Pergunta',
      answer: 'Fusce ipsum tortor, aliquam vel fringilla sit amet, consectetur at elit. Praesent ut sapien lacus. Sed dapibus mollis risus in pulvinar. Cras eleifend urna quis eros lacinia, a condimentum tortor pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      question: 'Segunda Pergunta',
      answer: 'Fusce ipsum tortor, aliquam vel fringilla sit amet, consectetur at elit. Praesent ut sapien lacus. Sed dapibus mollis risus in pulvinar. Cras eleifend urna quis eros lacinia, a condimentum tortor pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    }
  ]

  return (
    <section className="bg-off-white min-h-dvh">
      <div className="max-w-8xl mx-auto sm:px-6 md:px-8 justify-start items-center h-full py-9">
        <h2 className="text-4xl font-utopia-std font-semibold text-center mb-7"><span className="text-black">Perguntas</span> <span className="text-contextual-pink">frequentes</span></h2>
        <FaqComponent faqData={faq} />
      </div>
    </section>
  )
}