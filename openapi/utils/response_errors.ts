import { ResponseConfig } from '#openapi/types'

type ErrorConfig = {
  status: number
  detail: string
}

export function errorResponse(status: number, detail: string): ResponseConfig {
  return {
    status,
    schema: {
      type: 'object',
      properties: {
        detail: {
          type: 'string',
          example: detail,
        },
      },
      required: ['detail'],
    },
  }
}

export function errorResponses(errors: ErrorConfig[]): ResponseConfig[] {
  return errors.map((err) => errorResponse(err.status, err.detail))
}

export const commonErrors = {
  badRequest: errorResponse(400, 'Bad Request'),
  unauthorized: errorResponse(401, 'Unauthorized'),
  forbidden: errorResponse(403, 'Forbidden'),
  notFound: errorResponse(404, 'Not Found'),
  conflict: errorResponse(409, 'Conflict'),
  unprocessableEntity: errorResponse(422, 'Unprocessable Entity'),
  internalServerError: errorResponse(500, 'Internal Server Error'),
}
