import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'
import { ReactNode } from 'react'
import { FavoriteCharactersProvider } from '../features/characters/providers/favorite-characters.provider'
import { HeaderComponent } from '../core/delivery/header/header.component'

const roboto = Roboto({ weight: '100', subsets: ['latin'] })

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
    <html lang="en">
      <body className={roboto.className}>
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
