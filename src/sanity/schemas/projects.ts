import { defineArrayMember } from 'sanity'

export const projects = {
  name: 'projects',
  title: 'Projetos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'image',
      title: 'Imagem Principal',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        }),
        defineArrayMember({
          type: 'file',
          name: 'video',
          title: 'Vídeo',
          options: {
            accept: 'video/*',
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda',
            },
          ],
        }),
      ],
    },
  ],
}
