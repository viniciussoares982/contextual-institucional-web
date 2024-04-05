import { slugify } from "@/app/utils/utils";

import Question from "./question";

interface IFaqStructure {
  question: string;
  answer: string;
}

interface IFaqComponent {
  faqData: IFaqStructure[];
}

export default function FaqComponent({ faqData }: IFaqComponent) {
  return (
    <div className="max-w-8xl mx-auto px-7 sm:px-6 md:px-8 md:w-[722px] flex flex-col justify-start items-center h-full">
      {faqData.map((faq: IFaqStructure, index: number) => (
        <Question key={slugify(faq.question)} question={faq} order={index} />
      ))}
    </div>
  )
}