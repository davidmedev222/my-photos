import { Header } from '@/components'
import '@/styles/globals.css'

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-wrap bg-slate-950 text-white'>
        <Header />
        {children}
      </body>
    </html>
  )
}
export default RootLayout
