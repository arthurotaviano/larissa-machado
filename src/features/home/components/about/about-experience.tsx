/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react'

export function AboutExperience({ content }: { content: any }) {
  return (
    <>
      <h3 className='text-xl font-bold'>Experiência</h3>
      <div className='mt-5'>
        <PortableText value={content} />
      </div>
    </>
  )
}
