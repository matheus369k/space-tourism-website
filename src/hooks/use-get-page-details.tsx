import axios from 'axios'
import { useEffect, useState } from 'react'
import type {
  CrewMemberType,
  DestinationType,
  SpaceData,
  TechnologyType,
} from '../@type/space-data'

type UseGetPageDetailsProps = { page: keyof SpaceData }
type PagesDetails = CrewMemberType | DestinationType | TechnologyType

export function useGetPageDetails<T extends PagesDetails>({
  page,
}: UseGetPageDetailsProps) {
  const [pageDetails, setPageDetails] = useState<T[]>([])

  const getPageDetails = async () => {
    const response = await axios.get('data.json')
    return response.data
  }

  const updateStatePageDetails = async () => {
    const result = await getPageDetails()
    setPageDetails(result[page])
  }

  useEffect(() => {
    updateStatePageDetails()
  }, [])

  return {
    pageDetails,
  }
}
