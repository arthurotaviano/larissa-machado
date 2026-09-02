'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useModal } from '../../hooks/useModal'

type ItemProps = {
  url: string
  label: string
  children: ReactNode
  modal: ReactNode
}

export function Item({ url, label, children, modal }: ItemProps) {
  const { triggerRef, containerRef, handleTriggerClick } = useModal()

  return (
    <li ref={containerRef}>
      <Link
        className='relative block w-full h-full'
        href={`projetos/${url}`}
        aria-label={label}
        data-modal-trigger
        ref={triggerRef}
        onClick={handleTriggerClick}
      >
        {children}
      </Link>
      {modal}
    </li>
  )
}
