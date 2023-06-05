import { Header } from '@/components'
import '@/styles/globals.css'

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='mx-auto grid min-h-screen bg-slate-950 text-white md:grid-cols-[1fr_3fr] 2xl:max-w-screen-2xl'>
        <Header />
        {children}
      </body>
    </html>
  )
}
export default RootLayout
