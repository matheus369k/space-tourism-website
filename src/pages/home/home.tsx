import { ROUTES } from '@/routes/app-routes'
import style from './home.module.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  const handleStartExploration = () => {
    navigate(ROUTES.destination.path)
  }

  return (
    <div className={style.home_container}>
      <div className={style.home_content}>
        <span>So, you want to travel to</span>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button type='button' onClick={handleStartExploration}>
        Explore
      </button>
    </div>
  )
}
