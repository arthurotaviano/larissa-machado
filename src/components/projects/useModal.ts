'use client'

import { useCallback, useEffect, useRef } from 'react'

const FOCUSABLE_SELECTORS = ['a[href]', 'button:not([disabled])', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', '[tabindex]:not([tabindex="-1"])'].join(', ')

export function useModal() {
  const triggerRef = useRef<HTMLAnchorElement | null>(null)
  const containerRef = useRef<HTMLLIElement | null>(null)

  const getModal = useCallback(() => containerRef.current?.querySelector<HTMLElement>('[data-modal-component]') ?? null, [])

  const getDialog = useCallback(() => getModal()?.querySelector<HTMLElement>('[role="dialog"]') ?? null, [getModal])

  const getFocusableElements = useCallback(() => {
    const dialog = getDialog()
    if (!dialog) return []
    return Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS))
  }, [getDialog])

  const setInert = useCallback(
    (active: boolean) => {
      const modal = getModal()
      if (!modal) return

      const siblings = Array.from(document.body.children) as HTMLElement[]

      for (const el of siblings) {
        if (el.contains(modal)) continue
        if (active) {
          el.setAttribute('inert', '')
        } else {
          el.removeAttribute('inert')
        }
      }
    },
    [getModal]
  )

  const open = useCallback(() => {
    const modal = getModal()
    if (!modal) return

    modal.classList.add('modal-open')
    document.documentElement.classList.add('overflow-hidden')
    setInert(true)

    const dialog = getDialog()
    if (dialog) {
      dialog.setAttribute('aria-hidden', 'false')
      dialog.focus()
    }
  }, [getModal, getDialog, setInert])

  const close = useCallback(() => {
    const modal = getModal()
    if (!modal) return

    modal.classList.remove('modal-open')
    document.documentElement.classList.remove('overflow-hidden')
    setInert(false)

    const dialog = getDialog()
    if (dialog) {
      dialog.setAttribute('aria-hidden', 'true')
    }

    triggerRef.current?.focus()
  }, [getModal, getDialog, setInert])

  const handleTriggerClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      open()
    },
    [open]
  )

  useEffect(() => {
    const modal = getModal()
    if (!modal) return

    function handleKeyDown(e: KeyboardEvent) {
      if (!getModal()?.classList.contains('modal-open')) return

      if (e.key === 'Escape') {
        close()
        return
      }

      if (e.key === 'Tab') {
        const focusable = getFocusableElements()
        if (focusable.length === 0) {
          e.preventDefault()
          return
        }

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.closest('[data-modal-close]')) {
        close()
      }
    }

    modal.addEventListener('keydown', handleKeyDown)
    modal.addEventListener('click', handleClick)

    return () => {
      modal.removeEventListener('keydown', handleKeyDown)
      modal.removeEventListener('click', handleClick)
    }
  }, [getModal, getFocusableElements, close])

  return { triggerRef, containerRef, handleTriggerClick }
}
