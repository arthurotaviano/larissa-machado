/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlFor } from '@/lib/sanity'
import styles from './about-logos.module.css'

type AboutClientProps = {
  name: string
  logo: any
}

export function AboutLogos({ clients }: { clients: AboutClientProps[] }) {
  return (
    <div className={`mt-5 md:mt-10 ${styles.logos}`}>
      <h3 className='sr-only'>Alguns Clientes</h3>
      <ul className='grid gap-5'>
        {clients.map(client => (
          <li key={client.name}>
            <div aria-hidden='true'>
              <picture>
                <img
                  className='block w-full h-auto'
                  src={urlFor(client.logo)}
                  alt={`Logotipo ${client.name}`}
                />
              </picture>
            </div>
            <span className='sr-only'>Nome do Cliente</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
