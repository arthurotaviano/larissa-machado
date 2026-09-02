/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react'

export function AboutCourses({ content }: { content: any }) {
  return (
    <div className='mb-5 md:mb-10'>
      <h3 className='text-xl font-bold'>Formação</h3>
      <div className='mt-5'>
        <PortableText value={content} />
      </div>
    </div>
  )
}
