import { Gallery } from '@/components'

export const metadata = {
  title: 'My Photos | Home',
  description: 'Your image gallery to save special moments.',
  generator: 'Next.js',
  applicationName: 'My Photos',
  keywords: [
    'google photos',
    'images',
    'gallery',
    'b&h photo',
    'my photos',
    'photo editor',
    'photo',
    'icloud photos',
    'save photos'
  ],
  authors: [{ name: 'David Mamani', url: 'https://github.com/davidmedev222' }],
  creator: 'David Mamani',
  publisher: 'David Mamani',
  metadataBase: new URL('https://myphotosdev.vercel.app'),
  openGraph: {
    title: 'My Photos',
    description: 'Your image gallery to save special moments.',
    siteName: 'My Photos',
    locale: 'en',
    type: 'website'
  }
}

function HomePage() {
  return (
    <main>
      <Gallery />
    </main>
  )
}
export default HomePage
