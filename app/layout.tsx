import "@styles/globals.css"
import { ThemeProvider } from "@providers/theme-provider"
import { cn } from "@utils/cn";
import { fontVariables } from "@config/fonts.config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontVariables, "font-sans")}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
