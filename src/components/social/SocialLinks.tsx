import clsx from 'clsx'
import Link from 'next/link'

const listOfLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'Twitter', href: 'https://www.twitter.com' },
  { label: 'Linkedin', href: 'https://www.linkedin.com' },
  { label: 'Email', href: 'mailto:davidmedev@gmail.com' }
]

function SocialLinks() {
  const classes = {
    ul: clsx('mt-16 divide-y md:mt-auto'),
    link: clsx('block py-2.5 text-lg transition-colors hover:text-slate-500')
  }

  return (
    <ul className={classes.ul}>
      {listOfLinks.map((link) => (
        <li key={link.label}>
          <Link className={classes.link} href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
