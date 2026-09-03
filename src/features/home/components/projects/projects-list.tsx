/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildFileUrl, client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { ProjectsItem } from './projects-item'
import { ProjectsModal } from './projects-modal/projects-modal'
import { ProjectsText } from './projects-text/projects-text'
import { ProjectsThumbnail } from './projects-thumbnail/projects-thumbnail'

type ProjectsProjectProps = {
  title: string
  currentSlug: string
  image: string
  content: any
}

const VideoBlock = ({ value }: any) => {
  if (!value?.asset?._ref) return null
  const url = buildFileUrl(value.asset._ref)
  return (
    <figure>
      <video autoPlay controls loop muted preload='metadata' style={{ width: '100%' }}>
        <source src={url} />
      </video>
      {value.caption && <figcaption>{value.caption}</figcaption>}
    </figure>
  )
}

const components = {
  types: {
    image: ({ value }: any) => <img src={urlFor(value)} alt={value.alt ?? ''} />,
    video: VideoBlock,
    file: VideoBlock,
  },
}

async function getProjects() {
  const query = `
    *[_type == 'projects'] | order(_createdAt desc) {
    title,
    "currentSlug": slug.current,
    image,
    content,
    }`
  const projects = await client.fetch(query)

  return projects
}

export async function ProjectsList() {
  const projects: ProjectsProjectProps[] = await getProjects()

  return (
    <ul className='flex flex-col gap-5 md:gap-10 mx-auto max-w-360' aria-label='Projetos'>
      {projects.map(project => (
        <ProjectsItem
          url={project.currentSlug}
          label={project.title}
          modal={
            <ProjectsModal
              image={urlFor(project.image)}
              id={project.currentSlug}
              title={project.title}
              content={<PortableText value={project.content} components={components} />}
            />
          }
          key={project.currentSlug}
        >
          <ProjectsText title={project.title} />
          <ProjectsThumbnail
            url={urlFor(project.image)}
            description={`${project.title} - imagem de apresentação`}
          />
        </ProjectsItem>
      ))}
    </ul>
  )
}
