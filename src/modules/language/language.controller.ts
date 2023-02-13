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

@Controller('role-user')
export class LanguageController {
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllLanguage(@Req() request: AppRequest) {
    return;
  }
}
