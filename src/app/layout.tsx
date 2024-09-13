import type { Metadata } from "next";
import { Fredoka  } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { ThemeChangeListener } from "@/components/ThemeChangeListener";

const fredoka = Fredoka({
    subsets: ["latin"],
    display: "auto",
    variable: "--font-fredoka",
    weight: ["300", "400", "500"]
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Showcasing my skills and projects as a Meta certified digital marketer",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <html lang="en">
      <body className={fredoka.className} data-theme={theme?.value ? theme.value : 'light'}>
        <div className="bg-light dark:bg-dark">
          {children}
        </div>
        <ThemeChangeListener />
      </body>
    </html>
  );
}
