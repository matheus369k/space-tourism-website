import z from 'zod'

const googleAnalystRegex = /^G-[A-Z0-9]{10}$/
const schemaEnv = z.object({
  VITE_GA_ID: z.string().regex(googleAnalystRegex).optional(),
})

export const env = schemaEnv.parse(import.meta.env)
