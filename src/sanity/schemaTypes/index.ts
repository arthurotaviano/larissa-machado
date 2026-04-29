import { type SchemaTypeDefinition } from 'sanity'
import { about } from '../schemas/about'
import { clients } from '../schemas/clients'
import { projects } from '../schemas/projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, about, clients],
}
