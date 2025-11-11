import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 3 }),
    defineField({ name: 'ctaText', title: 'Texto del botón', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'URL del botón', type: 'url' }),
    defineField({
      name: 'image',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({ name: 'bgColor', title: 'Color de fondo (opcional)', type: 'string' }),
  ],
  preview: {
    select: { title: 'title', media: 'image' }
  }
})
