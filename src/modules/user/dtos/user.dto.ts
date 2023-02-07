import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../database/dtos/abstract.dto';

export class UserDto extends AbstractDto {
  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  email_verified_at?: number;

  @ApiPropertyOptional()
  password?: string;

  @ApiPropertyOptional()
  refresh_token?: string;

  @ApiPropertyOptional()
  first_name?: string;

  @ApiPropertyOptional()
  last_name?: string;

  @ApiPropertyOptional()
  user_name?: string;

  @ApiPropertyOptional()
  avatar_id?: number;

  @ApiProperty()
  is_super_user: number;

  @ApiProperty()
  is_manage_supers: number;

  @ApiPropertyOptional()
  permissions?: string;

  @ApiPropertyOptional()
  last_login?: number;
}
