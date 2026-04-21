import style from './navbar.module.css'
import { useState } from 'react'
import { NavbarItem } from './navbar-item'
import { NavbarRoot } from './navbar-root'
import { NavbarMobileModeIcon } from './navbar-icon'
import { useDetectedScreenMode } from '../../hooks/use-detected-screen-mode'
import { ROUTES } from '@/routes/app-routes'

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { detectedMode } = useDetectedScreenMode()
  const NAVBAR_ITEMS = [
    { ...ROUTES.home, number: '00' },
    { ...ROUTES.destination, number: '01' },
    { ...ROUTES.crew, number: '02' },
    { ...ROUTES.technology, number: '03' },
  ]

  const handleToggleMenu = () => setIsOpenMenu((state) => !state)

  if (detectedMode === 'mobile') {
    return (
      <NavbarRoot data-is-open={isOpenMenu} customClass='mobile'>
        <NavbarMobileModeIcon
          className={style.menu_icon}
          onClick={handleToggleMenu}
          isOpen={isOpenMenu}
        />

        <ul className={style.navbar_list}>
          {NAVBAR_ITEMS.map((item) => (
            <NavbarItem
              {...item}
              key={item.name}
              onToggleMenu={handleToggleMenu}
            />
          ))}
        </ul>
      </NavbarRoot>
    )
  }

  return (
    <NavbarRoot customClass='desktop'>
      <ul className={style.navbar_list}>
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            {...item}
            key={item.name}
            onToggleMenu={handleToggleMenu}
          />
        ))}
      </ul>
    </NavbarRoot>
  )
}
