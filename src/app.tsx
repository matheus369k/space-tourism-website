import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes/app-routes'

export const App = () => {
  return <RouterProvider router={appRoutes} />
}
