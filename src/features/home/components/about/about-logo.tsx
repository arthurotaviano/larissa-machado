import { Logo } from '@/components/logo'

export function AboutLogo() {
  return (
    <figure className='inline-block mb-5'>
      <Logo
        className='block w-41 md:w-61.5 h-10 md:h-15 fill-black'
        role='img'
        aria-label='Logotipo Larissa Machado'
      />
    </figure>
  )
}
