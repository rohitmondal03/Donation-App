import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { ClerkProvider } from "@clerk/nextjs"

import { cn } from '@/lib/utils'

import './globals.css'

import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'


const monsterrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: 'Help4Paws',
  description: 'Help4Paws',
}

export default function RootLayout(
  { children, }: { children: React.ReactNode }
) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={
            cn(monsterrat.className, "h-screen antialiased")
          }
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
