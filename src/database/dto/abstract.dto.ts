import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Timestamp } from 'typeorm';

export class AbstractDto {
  @ApiProperty()
  @Expose()
  id: bigint;

  @ApiPropertyOptional()
  @Expose()
  created_at?: Timestamp;

  @ApiPropertyOptional()
  updated_at?: Timestamp;
}
