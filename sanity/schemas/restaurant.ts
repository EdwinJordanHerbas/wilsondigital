import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurante',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string' }),
    defineField({ name: 'about', title: 'Descripción', type: 'text' }),
    defineField({ name: 'heroImages', title: 'Fotos hero', type: 'array', of: [{ type: 'image' }] }),
    defineField({
      name: 'contact', title: 'Contacto', type: 'object',
      fields: [
        { name: 'whatsappLink', title: 'WhatsApp link', type: 'url' },
        { name: 'email', title: 'Email', type: 'string' },
      ],
    }),
  ],
})
