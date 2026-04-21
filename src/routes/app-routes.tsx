import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { Destination } from '../pages/destination/destination'
import { Crew } from '../pages/crew/crew'
import { Technology } from '../pages/technology/technology'
import { RootLayout } from '../layout/root'

export const ROUTES = {
  home: {
    name: 'home',
    path: '/',
  },
  destination: {
    name: 'destination',
    path: '/destination',
  },
  crew: {
    name: 'crew',
    path: '/crew',
  },
  technology: {
    name: 'technology',
    path: '/technology',
  },
}

export const appRoutes = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: <RootLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Destination />,
        path: ROUTES.destination.path,
      },
      {
        element: <Crew />,
        path: ROUTES.crew.path,
      },
      {
        element: <Technology />,
        path: ROUTES.technology.path,
      },
    ],
  },
])
