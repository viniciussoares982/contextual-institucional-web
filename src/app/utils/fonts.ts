import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
export const utopiaStd = localFont({
  variable: '--font-utopia-std',
  src: [
    {
      path: './utopia-std/utopia-std-regular.otf',
    }
  ]
})

export const spaceGrotesk = localFont({
  variable: '--font-space-grotesk',
  src: [
    {
      path: './space-grotesk/space-grotesk-variablefont_wght.ttf',

    }
  ]
})