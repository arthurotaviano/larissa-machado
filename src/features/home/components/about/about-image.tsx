export function AboutImage({ url }: { url: string }) {
  return (
    <picture className='block'>
      <img className='rounded-4xl block w-full h-auto' src={url} alt='Foto de perfil de Larissa Machado' />
    </picture>
  )
}
