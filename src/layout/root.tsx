import { Outlet, useLocation } from 'react-router-dom'
import style from './root.module.css'
import { Loading } from '../components/loading'
import { Header } from './header'
import { ROUTES } from '../routes/app-routes'

export const RootLayout = () => {
  const { pathname } = useLocation()
  const { base, ...routes } = ROUTES
  const currentRoute = Object.values(routes).find((route) => {
    return route.path === pathname.replace(base, '')
  })

  return (
    <div
      data-current-route={currentRoute?.name || routes.home.name}
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
