import {groq} from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0]{
  title,
  subtitle,
  ctaText,
  ctaHref,
  bgColor,
  "imageUrl": image.asset->url
}`
