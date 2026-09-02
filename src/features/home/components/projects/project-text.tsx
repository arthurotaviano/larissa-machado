import { Plus } from 'lucide-react'
import styles from './project-text.module.css'

export function ProjectText({ title }: { title: string }) {
  return (
    <div className={`absolute top-0 left-0 z-2 whitespace-nowrap overflow-hidden flex justify-between items-end rounded-[18px] md:rounded-4xl p-3 md:p-5 w-full h-full ${styles.projectText}`} aria-hidden='true'>
      <h3 className='relative z-2 text-xl md:text-2xl lg:text-3xl font-bold'>{title}</h3>
      <div className='relative z-2 flex justify-center items-center rounded-full w-7 md:w-9 h-7 md:h-9 bg-white'>
        <Plus className='w-5 md:w-6 h-5 md:h-6 text-neutral-950' />
      </div>
    </div>
  )
}
