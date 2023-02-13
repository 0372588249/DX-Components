import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppRequest } from 'utils/app-request';
import { UserCreateDto } from './dto/user-create.dto';
import { UserService } from './services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Req() request: AppRequest, @Body() body: UserCreateDto) {
    return this.userService.createUser(request, body);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getUserbyId(
    @Req() request: AppRequest,
    @Param('id', ParseIntPipe) id: bigint,
  ) {
    return this.userService.getUserById(request, id);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllUser(@Req() request: AppRequest) {
    return this.userService.getAllUser(request);
  }
}
