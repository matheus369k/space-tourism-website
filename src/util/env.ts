import z from 'zod'

const BaseRouteRegex = /^\/([a-zA-Z-]+)(\/[a-zA-Z-]+)*$/
const schemaEnv = z.object({
  VITE_BASE_ROUTE: z.string().regex(BaseRouteRegex),
})

export const env = schemaEnv.parse(import.meta.env)
