import { FaLinkedinIn } from 'react-icons/fa'

export function AboutLinkedInButton({ url }: { url: string }) {
  return (
    <a className='inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-lg py-3 px-8 bg-neutral-950 text-white text-center font-bold' href={url} target='_blank' aria-label='LinkedIn'>
      <FaLinkedinIn size={18} aria-hidden='true' />
      <span>LinkedIn</span>
    </a>
  )
}
