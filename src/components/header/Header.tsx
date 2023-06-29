'use client'
import { LogoIcon, SocialLinks } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'

function Header() {
  const [ref1, isIntersecting1] = useIntersectionObserver({ threshold: 0.98 }, true)

  const classes = {
    header: clsx('flex flex-col gap-y-2 p-5'),
    title: clsx('clip-none text-2xl font-bold', isIntersecting1 && 'animate-mask-left'),
    paragraph: clsx('clip-none text-base', isIntersecting1 && 'animate-mask-left')
  }

  return (
    <header ref={ref1} className={classes.header}>
      <LogoIcon />
      <h1 className={classes.title}>My Photos</h1>
      <p data-animation-delay={300} className={classes.paragraph}>
        Bienvenido a la galeria de fotos, inicia sesion y sube tus imagenes para mostrarlas a todo
        el mundo.
      </p>
      <SocialLinks isIntersecting={isIntersecting1} />
    </header>
  )
}

export default Header
