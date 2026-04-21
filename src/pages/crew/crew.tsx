import style from './crew.module.css'
import { useGetPageDetails } from '../../hooks/use-get-page-details'
import { useGetCurrentDetails } from '../../hooks/use-get-current-details'
import type { CrewMemberType } from '../../@type/space-data'
import { TitleCounter, TitleRoot } from '@/components/title/title'
import { useUrlQueryParams } from '@/hooks/use-url-query-params'

export const Crew = () => {
  const { pageDetails } = useGetPageDetails<CrewMemberType>({ page: 'crew' })
  const { currentDetails, updateStateCurrentDetails } =
    useGetCurrentDetails<CrewMemberType>({
      details: pageDetails,
      page: 'crew',
    })
  const { setQueryParams, getQueryParams } = useUrlQueryParams()

  const handleNavigatePages = ({ step }: { step: number }) => {
    setQueryParams({ name: 'page', value: step.toString() })
    updateStateCurrentDetails({ step })
  }

  if (!currentDetails) return

  const renderNavCircleItemUI = (step: number) => {
    const currentPage = Number(getQueryParams({ name: 'page' }))
    const isSelected = step === currentPage

    return (
      <div
        key={pageDetails[step].name}
        data-is-selected={isSelected}
        onClick={() => handleNavigatePages({ step })}
      />
    )
  }

  return (
    <div className={style.crew_container}>
      <TitleRoot>
        <TitleCounter>02</TitleCounter>
        Meet your crew
      </TitleRoot>

      <div className={style.crew_info}>
        <div className={style.crew_header_info}>
          <span>{currentDetails.role}</span>
          <h1>{currentDetails.name}</h1>
        </div>

        <p className={style.crew_description_info}>{currentDetails.bio}</p>
      </div>

      <nav className={style.crew_nav_circle}>
        {Array.from({ length: pageDetails.length }).map((_, index) => {
          return renderNavCircleItemUI(index)
        })}
      </nav>

      <div className={style.crew_image_container}>
        <img src={currentDetails.image} alt='imagem' />
      </div>
    </div>
  )
}
