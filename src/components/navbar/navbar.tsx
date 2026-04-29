'use client'

import { useEffect, useRef, useState } from 'react'
import { NavbarLogo } from './navbar-logo'
import { NavbarMenu } from './navbar-menu'
import { NavbarMenuTrigger } from './navbar-menu-trigger'
import styles from './navbar-menu.module.css'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [animating, setAnimating] = useState(false)
  const closeMenu = () => {
    setIsOpen(false)
    setAnimating(true)
    setTimeout(() => setAnimating(false), 480)
  }
  const handleMenuToggle = () => {
    if (isOpen) {
      closeMenu()
    } else {
      setIsOpen(true)
      setAnimating(true)
      setTimeout(() => setAnimating(false), 480)
    }
  }
  const isMounted = useRef(false)

  // Handle no-transitions
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      document.documentElement.classList.add('no-transitions')
      clearTimeout(timeout)
      timeout = setTimeout(() => document.documentElement.classList.remove('no-transitions'), 480)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeout)
    }
  }, [])

  // Handle noscroll
  useEffect(() => {
    document.documentElement.classList.toggle(styles.navbarNoscroll, isOpen)
    return () => document.documentElement.classList.remove(styles.navbarNoscroll)
  }, [isOpen])

  // Handle inert
  useEffect(() => {
    const backgroundElements = Array.from(document.getElementById('app')!.children).filter(el => el.id !== 'navbar') as HTMLElement[]

    backgroundElements.forEach(el => {
      if (isOpen) {
        el.setAttribute('inert', '')
      } else {
        el.removeAttribute('inert')
      }
    })

    return () => backgroundElements.forEach(el => el.removeAttribute('inert'))
  }, [isOpen])

  // Handle focus
  useEffect(() => {
    if (isOpen) {
      const firstLink = document.querySelector<HTMLAnchorElement>('#navbar-menu li a')
      setTimeout(() => firstLink?.focus(), 480)
    } else {
      if (!isMounted.current) {
        isMounted.current = true
        return
      }
      document.querySelector<HTMLButtonElement>('#navbar-menutrigger')?.focus()
    }
  }, [isOpen])

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <>
      <nav className={['absolute top-0 right-0 left-0 z-9999 h-20 md:h-25 bg-neutral-950 text-white', isOpen && styles.menuOpen, animating && styles.navbarAnimating].filter(Boolean).join(' ')} id='navbar' aria-label='Navegação'>
        <div className='relative mx-auto px-5' {...(isOpen && { role: 'dialog', 'aria-modal': true, 'aria-label': 'Menu' })}>
          <NavbarLogo isOpen={isOpen} />
          <NavbarMenu isOpen={isOpen} onClose={closeMenu} />
          <NavbarMenuTrigger onToggle={handleMenuToggle} isOpen={isOpen} />
        </div>
      </nav>
      <div className='h-20 md:h-25'></div>
    </>
  )
}
