import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HelloFLA!',
  description: 'Send a postcard to the Governor reminding him how wonderful Florida is and how much we miss him... why wait?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta property="og:image" content="https://www.hellofla.com/_next/image?url=%2FWishYouWereHere.png&w=384&q=75&dpl=dpl_4fCWHY7Kdrz79ko1qynLKRYz9ATE" />
  <link rel="icon" href="https://www.hellofla.com/_next/image?url=%2FWishYouWereHere.png&w=384&q=75&dpl=dpl_4fCWHY7Kdrz79ko1qynLKRYz9ATE" />
</Head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
