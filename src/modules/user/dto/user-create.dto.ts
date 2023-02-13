import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export const ONE_MONTH_DURATION_IN_DAY = 28;

export class UserCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
