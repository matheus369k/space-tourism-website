import z from 'zod'

const schemaEnv = z.object({})

export const env = schemaEnv.parse(import.meta.env)
