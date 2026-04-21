import { useLayoutEffect, useState } from 'react'

type DetectedModeState = 'mobile' | 'tablet' | 'desktop'

export const useDetectedScreenMode = () => {
  const [detectedMode, setDetectedMode] = useState<DetectedModeState>('desktop')

  const handleSwitchScreenMode = () => {
    const isMobileMode = window.innerWidth <= 768
    if (isMobileMode) {
      return setDetectedMode('mobile')
    }

    const isTabletMode = window.innerWidth <= 1024
    if (isTabletMode) {
      return setDetectedMode('tablet')
    }

    setDetectedMode('desktop')
  }

  useLayoutEffect(() => {
    handleSwitchScreenMode()
    window.addEventListener('resize', handleSwitchScreenMode)
    return () => {
      window.removeEventListener('resize', handleSwitchScreenMode)
    }
  }, [])

  return {
    detectedMode,
  }
}
