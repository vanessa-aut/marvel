import type { Metadata } from 'next'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import './globals.scss'
import { ReactNode } from 'react'
import { FavoriteCharactersProvider } from '../features/characters/providers/favorite-characters.provider'
import { HeaderComponent } from '../core/delivery/header/header.component'

const roboto = Roboto({
  weight: ['100', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
})
const roboto_condensed = Roboto_Condensed({
  weight: ['100', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
})

export const metadata: Metadata = {
  title: 'Marvel App',
  description: 'Marvel characters',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto_condensed.variable}`}>
      <body>
        <FavoriteCharactersProvider>
          <HeaderComponent />
          <main>
            <section>{children}</section>
          </main>
        </FavoriteCharactersProvider>
      </body>
    </html>
  )
}
