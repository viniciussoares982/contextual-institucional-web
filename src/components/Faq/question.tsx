"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface IFaqStructure {
  question: string;
  answer: string;
}

interface IFaqComponent {
  question: IFaqStructure;
  order: number;
}

export default function Question({ question, order }: IFaqComponent) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="group my-2 flex flex-col rounded-md border border-black p-3 text-white"
      tabIndex={order + 1}
    >
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-space-grotesk text-base text-black md:text-xl">
          {question.question}
        </span>
        <XMarkIcon
          className={`h-4 w-4 text-black ${isOpen ? "rotate-0" : "rotate-45"} transition-all`}
        />
      </div>
      <div
        className={`h-auto items-center font-space-grotesk text-xs text-dark-gray transition-all md:text-base ${isOpen ? "visible mt-2 max-h-screen opacity-100" : "invisible max-h-0 opacity-0"}`}
      >
        {question.answer}
      </div>
    </div>
  );
}
