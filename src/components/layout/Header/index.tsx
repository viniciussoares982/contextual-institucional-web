'use client'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <nav className="absolute left-0 right-0">
      <div className="flex justify-between p-4">
        <Image
          src="/logo-contextual.png"
          width={184}
          height={42}
          alt="logo contextual"
        />
        <div
          onClick={() => setIsOpen(!isOpen)}
          id="nav-icon3"
          className="relative mx-2 my-auto h-6 w-12 rotate-0 cursor-pointer transition-all duration-500 ease-in-out"
        >
          <span
            className={`hamb-bar-last ${isOpen ? 'left-2/4 top-[12px] w-[0%]' : 'top-0 w-full'}`}
          ></span>
          <span
            className={`hamb-bar ${isOpen ? 'rotate-45' : 'rotate-0'} top-[12px]`}
          ></span>
          <span
            className={`hamb-bar ${isOpen ? '-rotate-45' : 'rotate-0'} top-[12px]`}
          ></span>
          <span
            className={`hamb-bar-last ${isOpen ? 'left-1/2 top-[12px] w-[0%]' : 'top-6 w-full'}`}
          ></span>
        </div>
      </div>
    </nav>
  )
}
