import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Timestamp } from 'typeorm';

export class AbstractDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  created_at: Timestamp;

  @ApiPropertyOptional()
  updated_at: Timestamp;
}
