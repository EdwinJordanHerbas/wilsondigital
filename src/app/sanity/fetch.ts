// src/sanity/fetch.ts
import {client} from '@/lib/sanity.client'
import {heroQuery, activePromotionsQuery} from './queries'

export async function getHero() {
  return client.fetch(heroQuery, {}, { next: { tags: ['hero'] } })
}
export async function getActivePromotions() {
  return client.fetch(activePromotionsQuery, {}, { next: { tags: ['promotions'] } })
}
