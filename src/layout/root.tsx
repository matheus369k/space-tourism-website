import { Outlet, useLocation } from 'react-router-dom'
import style from './root.module.css'
import { Loading } from '../components/loading'
import { Header } from './header'
import { ROUTES } from '@/routes/app-routes'

export const RootLayout = () => {
  const { pathname } = useLocation()
  const currentRoute = Object.values(ROUTES).find((route) => {
    return route.path === pathname
  })

  return (
    <div
      data-current-route={currentRoute?.name || ROUTES.home.name}
      className={style.container}
    >
      <Header />
      <main className={style.main_container}>
        <Outlet />
      </main>

      <Loading />
    </div>
  )
}
