import { ApiPropertyOptional, ApiHideProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, Max } from 'class-validator';
import { IPaginationMeta, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { LIMIT } from '../types/const';

export class PaginationDto implements IPaginationOptions {
  @ApiPropertyOptional({ default: LIMIT })
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  @Max(300)
  limit: number = LIMIT;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  page: number = 1;

  @ApiHideProperty()
  route?: string | undefined;

  @ApiHideProperty()
  metaTransformer?: ((meta: IPaginationMeta) => IPaginationMeta) | undefined;
}
