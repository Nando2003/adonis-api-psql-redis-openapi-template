import { OpenAPIV3 } from 'openapi-types'

export interface ParamConfig {
  name: string
  in?: 'path' | 'query'
  required?: boolean
  type?: any
  schema?: any
  description?: string
  example?: any
}

export type ResponseConfig =
  | {
      status: number
      type: any
      schema?: never
    }
  | {
      status: number
      type?: never
      schema: OpenAPIV3.SchemaObject
    }

export type OpenapiOptions = {
  summary: string
  body?: any
  params?: ParamConfig[]
  responses?: ResponseConfig[]
  secure?: boolean
}

export type ErrorMessageOverrides = Partial<Record<number, string | object>>
