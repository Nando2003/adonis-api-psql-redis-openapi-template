import { ApiProperty } from '@foadonis/openapi/decorators'

export class PaginationMeta {
  @ApiProperty({ example: 100 })
  declare total: number

  @ApiProperty({
    description: 'Number of items per page',
    example: 10,
  })
  declare perPage: number

  @ApiProperty({ example: 1 })
  declare currentPage: number

  @ApiProperty({ example: 10 })
  declare lastPage: number

  @ApiProperty({ example: 1 })
  declare firstPage: number

  @ApiProperty({ example: '/?page=1' })
  declare firstPageUrl: string

  @ApiProperty({ example: '/?page=10' })
  declare lastPageUrl: string

  @ApiProperty({
    example: '/?page=2',
    nullable: true,
  })
  declare nextPageUrl: string

  @ApiProperty({
    example: '/?page=1',
    nullable: true,
  })
  declare previousPageUrl: string
}
