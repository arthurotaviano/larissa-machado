'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { useProjectsModal } from './projects.hooks'

type ProjectsItemsProps = {
  url: string
  label: string
  children: ReactNode
  modal: ReactNode
}

export function ProjectsItem({ url, label, children, modal }: ProjectsItemsProps) {
  const { triggerRef, containerRef, handleTriggerClick } = useProjectsModal()

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
