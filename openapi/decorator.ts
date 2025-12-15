import { OpenapiOptions } from '#openapi/types'
import {
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
} from '@foadonis/openapi/decorators'

export function Openapi(optns: OpenapiOptions) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    ApiOperation({ summary: optns.summary })(target, propertyKey, descriptor)

    if (optns?.secure) {
      ApiBearerAuth()(target, propertyKey)
    }

    if (optns) {
      if (optns.body) {
        ApiBody({ type: optns.body })(target, propertyKey, descriptor)
      }

      if (optns.params?.length) {
        optns.params.forEach((param) => {
          const decoratorOptions = {
            name: param.name,
            required: param.required ?? false,
            description: param.description,
            example: param.example,
            type: param.type,
            schema: param.schema,
          }

          if (param.in === 'query') {
            ApiQuery(decoratorOptions)(target, propertyKey)
          } else {
            ApiParam(decoratorOptions)(target, propertyKey)
          }
        })
      }

      if (optns.responses?.length) {
        optns.responses.forEach((response) => {
          if (response.type) {
            ApiResponse({
              status: response.status,
              type: typeof response.type === 'function' ? response.type : () => response.type,
            })(target, propertyKey)
          } else if (response.schema) {
            ApiResponse({
              status: response.status,
              schema: response.schema,
            })(target, propertyKey)
          }
        })
      }
    }
  }
}
