/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from 'lucide-react'
import styles from './project-modal.module.css'

interface ProjectModalProps {
  id: string
  image: string
  title: string
  content: any
}

export function ProjectModal({ id, image, title, content }: ProjectModalProps) {
  return (
    <div className={`fixed top-0 right-0 bottom-0 left-0 overflow-auto bg-[rgba(0,0,0,.48)] backdrop-blur-[20px] ${styles.projectModal}`} data-modal-component data-modal-close>
      <div className='flex-col md:flex items-center min-h-full' data-modal-close>
        <div className='relative z-1 flex flex-col max-md:grow rounded-none md:rounded-4xl mx-auto md:my-10 w-full md:w-172 lg:w-236 md:scroll-mt-10 text-white' role='dialog' tabIndex={-1} aria-hidden='true' aria-modal='true' aria-labelledby={`modal-title-${id}`}>
          <div className='max-md:grow order-2 rounded-[inherit] -mt-13 md:-mt-14 p-5 md:p-19 bg-white text-neutral-950'>
            <picture className='block -m-5 md:-m-19 mb-5 md:mb-10'>
              <img className='block md:rounded-t-4xl w-full h-auto' src={image} alt={`${title} - imagem de apresentação`} />
            </picture>
            <div className={styles.modalBody}>
              <div className='text-2xl md:text-3xl lg:text-4xl font-extrabold' id={`modal-title-${id}`} role='heading' aria-level={2}>
                {title}
              </div>
              {content}
            </div>
          </div>
          <button className={`sticky top-5 z-9999 order-1 self-end flex justify-center items-center border-none m-0 mt-5 mr-5 p-0 w-8 md:w-9 h-8 md:h-9 ${styles.modalButton}`} aria-label='Fechar' data-modal-close>
            <span className='flex flex-col justify-center items-center rounded-full w-full h-full bg-neutral-200 text-neutral-950 pointer-events-none' aria-hidden='true'>
              <X className='w-5 md:w-6 h-5 md:h-6' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
