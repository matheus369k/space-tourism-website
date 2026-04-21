import { useEffect, useState } from 'react'
import style from './loading.module.css'
import { GiRingedPlanet } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'

export const Loading = () => {
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    setLoading(true)

    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [pathname])

  return (
    <>
      {loading && (
        <div className={style.loading_container}>
          <GiRingedPlanet />
        </div>
      )}
    </>
  )
}
