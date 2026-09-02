import Link from 'next/link'
import { Logo } from '../logo'

export function NavbarLogo({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className='flex flex-col justify-center items-start h-20 md:h-25'
      aria-hidden={isOpen ? 'true' : 'false'}
    >
      <Link
        className={`inline-block${isOpen ? ' pointer-events-none' : ''}`}
        href='/'
        {...(isOpen && { tabIndex: -1 })}
      >
        <Logo className='block w-41 md:w-61.5 h-10 md:h-15 fill-white' aria-hidden='true' />
        <span className='sr-only'>Larissa Machado</span>
      </Link>
    </div>
  )
}
