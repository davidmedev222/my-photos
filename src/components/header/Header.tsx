import { LogoIcon } from '@/components'

function Header() {
  return (
    <header className='space-y-2 p-5 md:max-w-xs'>
      <LogoIcon />
      <h1 className='text-lg font-bold'>My Photos</h1>
      <p className='text-base'>
        Bienvenido a la galeria de fotos, inicia sesion y sube tus imagenes para mostrarlas a todo
        el mundo.
      </p>
    </header>
  )
}

export default Header
