/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
  apiVersion: '2026-03-19',
  dataset: 'production',
  projectId: 'ldxi61tb',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source).url()
}

export function buildFileUrl(ref: string) {
  const [, id, extension] = ref.split('-')
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`
}
