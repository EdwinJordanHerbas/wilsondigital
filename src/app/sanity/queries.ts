// src/app/sanity/queries.ts
import { groq } from 'next-sanity';

export const heroQuery = groq`
*[_type == "hero"][0]{
  title,
  subtitle,
  ctaText,
  ctaHref,
  bgColor,
  "imageUrl": image.asset->url
}
`;

export const activePromotionsQuery = groq`
*[_type=="promotion" && (active==true || (defined(startsAt) && startsAt<=now() && (!defined(endsAt) || endsAt>=now())))]
| order(_createdAt desc)[0...6]{
  _id,
  title,
  description,
  price,
  "imageUrl": image.asset->url
}
`;
