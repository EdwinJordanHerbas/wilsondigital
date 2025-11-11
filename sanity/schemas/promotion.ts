import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'promotion',
  title: 'Promoción',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'desc', title: 'Descripción', type: 'text' }),
    defineField({ name: 'active', title: 'Activa', type: 'boolean', initialValue: true }),
  ],
})
