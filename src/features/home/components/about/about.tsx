/* eslint-disable @typescript-eslint/no-explicit-any */
import { client, urlFor } from '@/lib/sanity'
import { AboutContactButton } from './about-contact-button'
import { AboutCourses } from './about-courses'
import { AboutExperience } from './about-experience'
import { AboutImage } from './about-image'
import { AboutLinkedInButton } from './about-linkedin-button'
import { AboutLogo } from './about-logo'
import { AboutLogos } from './about-logos'
import { AboutText } from './about-text'
import styles from './about.module.css'

interface AboutInfoProps {
  text: any
  email: string
  photo: string
  experience: any
  courses: any
  linkedin: string
}

interface ClientsProps {
  name: string
  logo: any
}

interface AboutProps {
  aboutInfo: AboutInfoProps
  clients: ClientsProps[]
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
        <div className={`grid gap-10 ${styles.aboutColumns}`}>
          <div>
            <AboutLogo />
            <AboutText content={aboutInfo.text} />
            <AboutContactButton address={aboutInfo.email} />
          </div>
          <div>
            <AboutImage url={urlFor(aboutInfo.photo)} />
          </div>
          <div>
            <AboutExperience content={aboutInfo.experience} />
          </div>
          <div>
            <AboutCourses content={aboutInfo.courses} />
            <AboutLinkedInButton url={aboutInfo.linkedin} />
            <AboutLogos clients={clients} />
          </div>
        </div>
      </div>
    </section>
  )
}
