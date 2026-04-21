import { useLocation, useNavigate } from 'react-router-dom'

type UseUrlQueryParamsProps = {
  name: string
  value: string
}

export const useUrlQueryParams = () => {
  const { search } = useLocation()
  const navigate = useNavigate()

  const getQueryParams = ({ name }: { name: string }) => {
    const params = new URLSearchParams(search)
    return params.get(name)
  }

  const setQueryParams = (props: UseUrlQueryParamsProps) => {
    navigate(`?${props.name}=${props.value}`)
  }

  return {
    getQueryParams,
    setQueryParams,
  }
}
