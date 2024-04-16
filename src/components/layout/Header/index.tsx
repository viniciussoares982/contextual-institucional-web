import Image from 'next/image'

export default function Header() {
  return (
    <nav className="absolute left-0 right-0">
      <div className="flex justify-center p-4">
        <Image
          src="/logo-contextual.png"
          width={184}
          height={42}
          alt="logo contextual"
        />
      </div>
    </nav>
  )
}
