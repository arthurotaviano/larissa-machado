import { defineArrayMember, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'Sobre',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Texto',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
    },
    {
      name: 'experience',
      title: 'Experiência',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    },
    {
      name: 'courses',
      title: 'Formação',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
  ],
})
