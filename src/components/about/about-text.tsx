/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react'

export async function AboutText({ content }: { content: any }) {
  return (
    <div className='mb-5'>
      <PortableText value={content} />
    </div>
  )
}
