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
    <div className="max-w-8xl mx-auto flex h-full flex-col items-center justify-start px-7 sm:px-6 md:w-[722px] md:px-8">
      {faqData.map((faq: IFaqStructure, index: number) => (
        <Question key={slugify(faq.question)} question={faq} order={index} />
      ))}
    </div>
  );
}
