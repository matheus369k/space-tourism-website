import style from './destination.module.css'
import type { DestinationType } from '../../@type/space-data'
import { useGetPageDetails } from '@/hooks/use-get-page-details'
import { useGetCurrentDetails } from '@/hooks/use-get-current-details'
import { TitleCounter, TitleRoot } from '@/components/title/title'
import { useUrlQueryParams } from '@/hooks/use-url-query-params'

export const Destination = () => {
  const { pageDetails } = useGetPageDetails<DestinationType>({
    page: 'destinations',
  })
  const { currentDetails, updateStateCurrentDetails } =
    useGetCurrentDetails<DestinationType>({
      details: pageDetails,
      page: 'destinations',
    })
  const { setQueryParams } = useUrlQueryParams()

  const handleNavigatePages = ({ step }: { step: number }) => {
    setQueryParams({ name: 'page', value: step.toString() })
    updateStateCurrentDetails({ step })
  }

  if (!currentDetails) return

  const renderNavItemUI = ({ name, step }: { name: string; step: number }) => {
    const isSelected = name === currentDetails.name

    return (
      <div
        key={name}
        data-is-selected={isSelected}
        onClick={() => handleNavigatePages({ step })}
      >
        {name}
      </div>
    )
  }

  return (
    <div className={style.destination_container}>
      <TitleRoot>
        <TitleCounter>01</TitleCounter>
        Pick your destination
      </TitleRoot>

      <div className={style.destination_image_container}>
        <img src={currentDetails.image} alt='imagem' />
      </div>

      <div className={style.destination_content}>
        <nav className={style.destination_nav_items}>
          {pageDetails.map((item, index) => {
            return renderNavItemUI({ name: item.name, step: index })
          })}
        </nav>

        <div className={style.destination_info}>
          <div>
            <h1>{currentDetails.name}</h1>
            <p>{currentDetails.description}</p>
          </div>

          <div className={style.destination_info_averages_status}>
            <div>
              <h3>Avg. distance</h3>
              <span>{currentDetails.distance}</span>
            </div>

            <div>
              <h3>Est. travel time</h3>
              <span>{currentDetails.travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
