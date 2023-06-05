import { LogoIcon, SocialLinks } from '@/components'
import clsx from 'clsx'

function Header() {
  const classes = {
    header: clsx('flex flex-col gap-y-2 p-5 md:max-w-xs'),
    title: clsx('text-lg font-bold'),
    paragraph: clsx('text-base')
  }

  return (
    <header className={classes.header}>
      <LogoIcon />
      <h1 className={classes.title}>My Photos</h1>
      <p className={classes.paragraph}>
        Bienvenido a la galeria de fotos, inicia sesion y sube tus imagenes para mostrarlas a todo
        el mundo.
      </p>
      <SocialLinks />
    </header>
  )
}

export default Header
