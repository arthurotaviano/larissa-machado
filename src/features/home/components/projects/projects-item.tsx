'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useProjectModal } from '../../hooks/useProjectModal'

type ItemProps = {
  url: string
  label: string
  children: ReactNode
  modal: ReactNode
}

export function ProjectsItem({ url, label, children, modal }: ItemProps) {
  const { triggerRef, containerRef, handleTriggerClick } = useProjectModal()

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
