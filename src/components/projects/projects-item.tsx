'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useModal } from './useModal'

interface ProjectsItemProps {
  url: string
  label: string
  children: ReactNode
  modal: ReactNode
}

export function ProjectsItem({ url, label, children, modal }: ProjectsItemProps) {
  const { triggerRef, containerRef, handleTriggerClick } = useModal()

  return (
    <li ref={containerRef}>
      <Link className='relative block w-full h-full' href={`projetos/${url}`} aria-label={label} data-modal-trigger ref={triggerRef} onClick={handleTriggerClick}>
        {children}
      </Link>
      {modal}
    </li>
  )
}
