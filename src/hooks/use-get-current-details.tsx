import { useLayoutEffect, useState } from 'react'
import type {
  CrewMemberType,
  DestinationType,
  SpaceData,
  StandardImages,
  TechImages,
  TechnologyType,
} from '../@type/space-data'
import { useDetectedScreenMode } from './use-detected-screen-mode'
import { useUrlQueryParams } from './use-url-query-params'

type CurrentDetails = CrewMemberType | DestinationType | TechnologyType
type CurrentDetailsState<T> = Omit<T, 'images'> & {
  image: string
}

type UseGetPageDetailsProps = { page: keyof SpaceData }
type UseGetCurrentDetailsProps<T> = UseGetPageDetailsProps & {
  details: T[] | undefined
}

type FormatterReturnedImagesDetails = {
  images: TechImages | StandardImages
}

export function useGetCurrentDetails<T extends CurrentDetails>(
  props: UseGetCurrentDetailsProps<T>,
) {
  const [currentDetails, setCurrentDetails] = useState<CurrentDetailsState<T>>()
  const { getQueryParams, setQueryParams } = useUrlQueryParams()
  const { detectedMode } = useDetectedScreenMode()

  const formatterReturnedImagesDetails = ({
    images,
  }: FormatterReturnedImagesDetails) => {
    if (props.page === 'technology') {
      const { landscape, portrait } = images as TechImages
      const isNotDesktopScreenMode = detectedMode !== 'desktop'
      const image = isNotDesktopScreenMode ? landscape : portrait

      return {
        image,
      }
    }

    const { png, webp } = images as StandardImages
    const image = detectedMode === 'tablet' ? webp : png

    return {
      image,
    }
  }

  const updateStateCurrentDetails = ({ step }: { step: number }) => {
    const detailIsExist = props.details?.[step]
    if (!detailIsExist) return

    const { images, ...detail } = detailIsExist
    const { image } = formatterReturnedImagesDetails({ images: images })

    setCurrentDetails({
      ...detail,
      image,
    })
  }

  const restoreOldDetailsState = () => {
    const currentPage = getQueryParams({ name: 'page' })

    if (currentPage) {
      return updateStateCurrentDetails({ step: Number(currentPage) })
    }

    updateStateCurrentDetails({ step: 0 })
    setQueryParams({ name: 'page', value: '0' })
  }

  useLayoutEffect(() => {
    restoreOldDetailsState()
  }, [detectedMode, props.details])

  return {
    updateStateCurrentDetails,
    currentDetails,
  }
}
