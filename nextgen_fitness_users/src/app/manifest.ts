// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextGen Fitness Progressive App',
    short_name: 'NextGen Fitness',
    description: 'Thesis Prototype',
    start_url: '/login',
    display: 'standalone',
    background_color: '#6f00ffaf',
    theme_color: '#8831fb',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}