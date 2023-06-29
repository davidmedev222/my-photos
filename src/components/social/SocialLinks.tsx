import clsx from 'clsx'
import Link from 'next/link'

const listOfLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'Twitter', href: 'https://www.twitter.com' },
  { label: 'Linkedin', href: 'https://www.linkedin.com' },
  { label: 'Email', href: 'mailto:davidmedev@gmail.com' }
]

interface Props {
  isIntersecting: boolean
}

function SocialLinks({ isIntersecting }: Props) {
  const classes = {
    ul: clsx('mt-16 divide-y md:mt-auto'),
    link: clsx(
      'clip-none block py-2.5 text-lg transition-colors hover:text-slate-500',
      isIntersecting && 'animate-mask-left'
    )
  }

  return (
    <ul className={classes.ul}>
      {listOfLinks.map((link, index) => {
        const animationDelay = 300 * (index + 1)

        return (
          <li key={link.label}>
            <Link data-animation-delay={animationDelay} className={classes.link} href={link.href}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
