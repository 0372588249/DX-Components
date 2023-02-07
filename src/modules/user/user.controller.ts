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
import { UserCreateDto } from './dtos/user-create.dto';
import { CreateUserService } from './services/create-user.service';
import { GetAllUserService } from './services/get-all-user.service';
import { GetUserByIdService } from './services/get-user-by-id.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly getUserByIdService: GetUserByIdService,
    private readonly createUserService: CreateUserService,
    private readonly getAllUserService: GetAllUserService,
  ) {}
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Req() request: AppRequest, @Body() body: UserCreateDto) {
    return this.createUserService.execute(request, body);
  }

  @Get('/:userId')
  @HttpCode(HttpStatus.OK)
  async getUserbyId(
    @Req() request: AppRequest,
    @Param('assetId', ParseIntPipe) assetId: number,
  ) {
    return this.getUserByIdService.execute(request, assetId);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllUser(@Req() request: AppRequest) {
    return this.getAllUserService.execute(request);
  }
}
