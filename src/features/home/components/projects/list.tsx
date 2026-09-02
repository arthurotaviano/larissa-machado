/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildFileUrl, client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { Item } from './item'
import { Modal } from './modal'
import { Text } from './text'
import { Thumbnail } from './thumbnail'

type ProjectProps = {
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

export async function List() {
  const projects: ProjectProps[] = await getProjects()

  return (
    <ul className='flex flex-col gap-5 md:gap-10 mx-auto max-w-360' aria-label='Projetos'>
      {projects.map(project => (
        <Item
          url={project.currentSlug}
          label={project.title}
          modal={
            <Modal
              image={urlFor(project.image)}
              id={project.currentSlug}
              title={project.title}
              content={<PortableText value={project.content} components={components} />}
            />
          }
          key={project.currentSlug}
        >
          <Text title={project.title} />
          <Thumbnail
            url={urlFor(project.image)}
            description={`${project.title} - imagem de apresentação`}
          />
        </Item>
      ))}
    </ul>
  )
}
