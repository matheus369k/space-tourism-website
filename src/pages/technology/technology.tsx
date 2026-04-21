import style from './technology.module.css'
import type { TechnologyType } from '../../@type/space-data'
import { useGetPageDetails } from '@/hooks/use-get-page-details'
import { useGetCurrentDetails } from '@/hooks/use-get-current-details'
import { TitleCounter, TitleRoot } from '@/components/title/title'
import { useUrlQueryParams } from '@/hooks/use-url-query-params'

export const Technology = () => {
  const { pageDetails } = useGetPageDetails<TechnologyType>({
    page: 'technology',
  })
  const { currentDetails, updateStateCurrentDetails } =
    useGetCurrentDetails<TechnologyType>({
      details: pageDetails,
      page: 'technology',
    })
  const { getQueryParams, setQueryParams } = useUrlQueryParams()

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
    <div className={style.technology_container}>
      <TitleRoot>
        <TitleCounter>03</TitleCounter>
        Space launch 101
      </TitleRoot>

      <div className={style.technology_image_container}>
        <img src={currentDetails.image} alt='imagem' />
      </div>

      <div className={style.technology_content}>
        <nav className={style.technology_nav_circle}>
          {Array.from({ length: pageDetails.length }).map((_, index) => {
            return renderNavCircleItemUI(index)
          })}
        </nav>

        <div className={style.technology_info}>
          <span>The terminology...</span>
          <h1>{currentDetails.name}</h1>
          <p>{currentDetails.description}</p>
        </div>
      </div>
    </div>
  )
}
