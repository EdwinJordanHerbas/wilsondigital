import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'promotion',
  title: 'Promoción',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r=>r.required()}),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({ name: 'price', type: 'number' }),
    defineField({ name: 'image', type: 'image', options: {hotspot:true} }),
    defineField({ name: 'startsAt', type: 'datetime', title: 'Inicio' }),
    defineField({ name: 'endsAt', type: 'datetime', title: 'Fin' }),
    defineField({ name: 'active', type: 'boolean', title: 'Forzar activo', initialValue: true }),
  ],
  orderings: [{title:'Más recientes', name:'createdDesc', by:[{field:'_createdAt', direction:'desc'}]}],
})

