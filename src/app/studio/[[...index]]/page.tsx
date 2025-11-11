'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config' // ajusta si tu archivo sanity.config.ts está en la raíz

export default function StudioPage() {
  return <NextStudio config={config} />
}
