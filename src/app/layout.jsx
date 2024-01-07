import localFont from 'next/font/local'
import { Providers } from "./providers"

import './globals.css'
const pt_sans = localFont({
  src: [
    {
      path: "../fonts/PTSans-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/PTSans-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "../fonts/PTSans-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../fonts/PTSans-BoldItalic.ttf",
      weight: "700",
      style: "italic"
    },
  ]

})

export const metadata = {
  title: 'Mainkan Kuis dari Ekuiss - SMK N 1 Demak',
  description: 'Quizziz dari SMK Negeri 1 Demak',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pt_sans.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
