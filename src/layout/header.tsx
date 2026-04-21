import { Navbar } from '../components/navbar/navbar'
import { Link } from 'react-router-dom'
import style from './header.module.css'
import { Logo } from '@/components/logo'

export const Header = () => {
  return (
    <header className={style.header}>
      <Link className={style.logo} to='/'>
        <Logo />
      </Link>

      <div className={style.header_bar} />

      <Navbar />
    </header>
  )
}
