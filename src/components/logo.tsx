import { useDetectedScreenMode } from '@/hooks/use-detected-screen-mode'
import React from 'react'

type LogoProps = React.SVGProps<SVGSVGElement>

export const Logo = ({ ...props }: LogoProps) => {
  const { detectedMode } = useDetectedScreenMode()

  if (detectedMode === 'mobile') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={40}
        height={40}
        fill='none'
        {...props}
      >
        <circle cx={20} cy={20} r={20} fill='#FFF' />
        <path
          fill='#0B0D17'
          fillRule='evenodd'
          d='M20 0s0 20-20 20c19.648.143 20 20 20 20s0-20 20-20C20 20 20 0 20 0Z'
          clipRule='evenodd'
        />
      </svg>
    )
  }

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={48} height={48} {...props}>
      <g fill='none' fillRule='evenodd'>
        <circle cx={24} cy={24} r={24} fill='#FFF' />
        <path
          fill='#0B0D17'
          d='M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z'
        />
      </g>
    </svg>
  )
}
