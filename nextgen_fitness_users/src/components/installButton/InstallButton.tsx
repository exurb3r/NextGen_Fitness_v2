// components/InstallButton.tsx
'use client'

import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import IosShareIcon from '@mui/icons-material/IosShare'
import DownloadIcon from '@mui/icons-material/Download'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    const ua = window.navigator.userAgent
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream)

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
    })

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    console.log('Install outcome:', outcome)
    setDeferredPrompt(null)
  }

  if (isInstalled || dismissed) return null

  if (isIOS) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 2,
          py: 1.5,
          borderRadius: 2.5,
          bgcolor: 'accentSecondary',
          border: '1px solid',
          borderColor: 'border',
        }}
      >
        <IosShareIcon fontSize="small" sx={{ color: 'primary.main' }} />
        <Typography variant="bodySmall" sx={{ color: 'text.secondary', flex: 1 }}>
          Tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>
        </Typography>
        <IconButton size="small" onClick={() => setDismissed(true)} aria-label="Dismiss">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    )
  }

  // Android/Chrome/Edge — only renders once the browser actually fires the event
  if (!deferredPrompt) return null

  return (
    <Button
      onClick={handleInstallClick}
      variant="contained"
      startIcon={<DownloadIcon />}
      sx={{
        background: 'gradient.primary',
        color: 'primary.contrastText',
        px: 3,
        py: 1,
        boxShadow: 'none',
        '&:hover': {
          background: 'gradient.primary',
          opacity: 0.92,
          boxShadow: 'none',
        },
      }}
    >
      Install App
    </Button>
  )
}