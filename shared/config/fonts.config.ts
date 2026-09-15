import { Geist, Geist_Mono, Inter } from "next/font/google"

export const geistHeading = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Optional: convenience array/object for applying all font variables at once
export const fontVariables = [
  inter.variable,
  geistHeading.variable,
  fontMono.variable,
].join(" ")

/*
* To add another font, define here 'subsets & 'variable'| Export 'fontName.variable'
* Add variable name in the theming.css --> '--font-name: var(--font-name);'
*/