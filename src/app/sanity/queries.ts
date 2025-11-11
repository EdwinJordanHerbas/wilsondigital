// src/sanity/queries.ts
import {groq} from 'next-sanity'

export const activePromotionsQuery = groq`
*[_type=="promotion" && (active==true || (defined(startsAt) && startsAt<=now() && (!defined(endsAt) || endsAt>=now())))]
| order(_createdAt desc)[0...6]{
  _id, title, description, price,
  "imageUrl": image.asset->url
}
`
