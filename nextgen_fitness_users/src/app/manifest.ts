// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextGen Fitness App',
    short_name: 'NextGen',
    description: 'Thesis Prototype',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#317EFB',
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