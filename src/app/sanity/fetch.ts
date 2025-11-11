import { client } from '@/lib/sanity.client'
import { heroQuery } from './queries'

export async function getHero() {
  return client.fetch(heroQuery)
}
