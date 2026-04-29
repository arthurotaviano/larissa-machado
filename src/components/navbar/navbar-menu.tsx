import Link from 'next/link'
import styles from './navbar-menu.module.css'

interface NavbarMenuProps {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { label: 'Projetos', href: '/' },
  { label: 'Sobre', href: '/#section-about' },
]

export function NavbarMenu({ isOpen, onClose }: NavbarMenuProps) {
  return (
    <ul className={`absolute top-20 md:top-25 right-0 left-0 flex flex-col justify-center px-5 w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] bg-neutral-950 text-center ${styles.navbarMenu}`} id='navbar-menu' aria-hidden={isOpen ? 'false' : 'true'}>
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link className='block py-3 md:py-5 text-2xl md:text-5xl font-semibold' href={href} onClick={onClose}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
