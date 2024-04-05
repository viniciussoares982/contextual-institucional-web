'use client'
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'

interface IFaqStructure {
  question: string;
  answer: string;
}

interface IFaqComponent {
  question: IFaqStructure;
  order: number;
}

export default function Question({ question, order }: IFaqComponent) {
  const [ isOpen, setIsOpen ] = React.useState(false)

  return (
    <div
      className="group flex flex-col border border-black rounded-md p-3 my-2 text-white"
      tabIndex={order + 1}
    >
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black md:text-xl font-space-grotesk text-base">{question.question}</span>
        <XMarkIcon className={`h-4 w-4 text-black ${isOpen ? 'rotate-0' : 'rotate-45'} transition-all`} />
      </div>
      <div
        className={`text-dark-gray font-space-grotesk text-xs md:text-base h-auto items-center transition-all ${isOpen ? 'visible max-h-screen opacity-100 mt-2' : 'invisible max-h-0 opacity-0'}`}
      >
        {question.answer}
      </div>
    </div>
  )
}