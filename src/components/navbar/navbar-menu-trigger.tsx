import styles from './navbar-menu-trigger.module.css'

interface NavbarMenuTriggerProps {
  isOpen: boolean
  onToggle: () => void
}

export function NavbarMenuTrigger({ isOpen, onToggle }: NavbarMenuTriggerProps) {
  return (
    <button className={['absolute top-4 md:top-6.5 right-2 w-12 h-12 cursor-pointer', styles.navbarMenuTrigger, isOpen && styles.menuOpen].filter(Boolean).join(' ')} id='navbar-menutrigger' type='button' aria-controls='navbar-menu' aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'} aria-expanded={isOpen} onClick={onToggle}>
      <span className='absolute left-3 block rounded-full w-6 h-0.5 bg-white'></span>
      <span className='absolute left-3 block rounded-full w-6 h-0.5 bg-white'></span>
      <span className='absolute left-3 block rounded-full w-6 h-0.5 bg-white'></span>
    </button>
  )
}
