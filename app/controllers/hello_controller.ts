import { Openapi } from '#openapi/decorator'
import { HelloSchema } from '#openapi/schemas/hello_schema'
import { commonErrors } from '#openapi/utils/response_errors'
import { HttpContext } from '@adonisjs/core/http'

export default class HelloController {
  @Openapi({
    summary: 'Show hello world',
    responses: [
      {
        status: 200,
        type: HelloSchema,
      },
      commonErrors.internalServerError,
    ],
  })
  async show(ctx: HttpContext) {
    return ctx.response.ok({ hello: 'world' })
  }
}
