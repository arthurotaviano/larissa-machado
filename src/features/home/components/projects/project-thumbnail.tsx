import styles from './project-thumbnail.module.css'

interface ProjectThumbnailProps {
  url: string
  description: string
}

export function ProjectThumbnail({ url, description }: ProjectThumbnailProps) {
  return (
    <div className={`relative z-1 overflow-hidden rounded-[18px] md:rounded-4xl w-full h-auto pb-[56.25%] ${styles.projectThumbnail}`} aria-hidden='true'>
      <picture className={`absolute top-0 l-0 w-full h-full ${styles.projectThumbnailImage}`}>
        <img className='block w-full h-full object-center object-cover' src={url} alt={description} />
      </picture>
    </div>
  )
}
