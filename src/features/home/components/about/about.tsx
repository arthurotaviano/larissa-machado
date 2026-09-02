/* eslint-disable @typescript-eslint/no-explicit-any */
import { client, urlFor } from '@/lib/sanity'
import styles from './about.module.css'
import { ContactButton } from './contact-button'
import { Courses } from './courses'
import { Experience } from './experience'
import { Image as AboutImage } from './image'
import { LinkedInButton } from './linkedin-button'
import { Logo } from './logo'
import { Logos } from './logos'
import { Text } from './text'

type InfoProps = {
  text: any
  email: string
  photo: string
  experience: any
  courses: any
  linkedin: string
}

type ClientProps = {
  name: string
  logo: any
}

type AboutProps = {
  aboutInfo: InfoProps
  clients: ClientProps[]
}

async function getAboutInfo() {
  const query = `*[_type == 'about' && name == 'Larissa Machado'][0] {text, email, photo, experience, courses, linkedin}`
  const aboutInfo = await client.fetch(query)
  const clients = await client.fetch(`*[_type == 'clients'] | order(_createdAt asc) { name, logo }`)

  return { aboutInfo, clients }
}

export async function About() {
  const { aboutInfo, clients }: AboutProps = await getAboutInfo()

  return (
    <section className='py-15 md:py-20 lg:py-25' id='section-about'>
      <div className='mx-auto px-5'>
        <h2 className='sr-only'>Sobre</h2>
        <div className={`grid gap-10 ${styles.columns}`}>
          <div>
            <Logo />
            <Text content={aboutInfo.text} />
            <ContactButton address={aboutInfo.email} />
          </div>
          <div>
            <AboutImage url={urlFor(aboutInfo.photo)} />
          </div>
          <div>
            <Experience content={aboutInfo.experience} />
          </div>
          <div>
            <Courses content={aboutInfo.courses} />
            <LinkedInButton url={aboutInfo.linkedin} />
            <Logos clients={clients} />
          </div>
        </div>
      </div>
    </section>
  )
}
