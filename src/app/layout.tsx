import './globals.css'
import { Lato } from 'next/font/google'
import 'flowbite';

const fonts = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: {
    template: ' Lansportofol - %s'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  )
}
