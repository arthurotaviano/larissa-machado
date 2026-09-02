import { ProjectsList } from './projects-list'

export function Projects() {
  return (
    <section className='pt-5 md:pt-10 pb-15 md:pb-20 lg:pb-25 bg-neutral-950 text-white'>
      <div className='mx-auto px-5'>
        <h2 className='sr-only'>Projetos</h2>
        <ProjectsList />
      </div>
    </section>
  )
}
