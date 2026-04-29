/* eslint-disable @typescript-eslint/no-explicit-any */
import createImageUrlBuilder from '@sanity/image-url'

const imageBuilder = createImageUrlBuilder({
  projectId: 'ldxi61tb',
  dataset: 'production',
})

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
