import { useLocation, useNavigate } from 'react-router-dom'
import style from './navbar-item.module.css'

export type NavbarItemProps = {
  onToggleMenu: () => void
  number: string
  name: string
  path: string
}

export const NavbarItem = ({
  onToggleMenu,
  name,
  number,
  path,
}: NavbarItemProps) => {
  const isCurrentRouter = useLocation().pathname === path
  const navigate = useNavigate()

  const handleToggleRouter = () => {
    navigate(path)
    onToggleMenu()
  }

  return (
    <li
      className={style.navbar_item}
      onClick={handleToggleRouter}
      data-is-selected={isCurrentRouter}
    >
      <span>{number}</span>
      {name}
    </li>
  )
}
