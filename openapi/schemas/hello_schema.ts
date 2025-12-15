import { ApiProperty } from '@foadonis/openapi/decorators'

export class HelloSchema {
  @ApiProperty({ example: 'world' })
  declare hello: string
}
