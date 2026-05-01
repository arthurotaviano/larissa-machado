/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildFileUrl, client, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

interface ProjectProps {
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

async function getProject(slug: string) {
  const query = `*[_type == 'projects' && slug.current == $slug][0] {
    "currentSlug": slug.current,
    title,
    image,
    content
  }`

  return await client.fetch(query, { slug })
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project: ProjectProps = await getProject(slug)

  const title = `${project.title} - Larissa Machado`
  const description = `Saiba mais sobre o projeto criado para ${project.title}, por Larissa Machado.`
  const url = `/projetos/${slug}`

  return {
    title,
    description,
    openGraph: {
      url,
      images: ['/opengraph-image.png'],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project: ProjectProps = await getProject(slug)

  return (
    <article className='pb-15 md:pb-20 lg:pb-25'>
      <picture>
        <img className='block w-full h-auto' src={urlFor(project.image)} alt={`${project.title} - imagem de apresentação`} />
      </picture>
      <div className='mx-auto mt-5 md:mt-10 px-5'>
        <div className='flex flex-col gap-4 mx-auto w-full md:w-142 lg:w-206'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>{project.title}</h1>
          <PortableText value={project.content} components={components} />
        </div>
      </div>
    </article>
  )
}
