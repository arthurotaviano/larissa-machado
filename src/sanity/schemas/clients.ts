import { defineType } from 'sanity'

export const clients = defineType({
  name: 'clients',
  title: 'Clientes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome do Cliente',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
})
