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
import { SettingService } from './services/setting.service';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllSetting(@Req() request: AppRequest) {
    return this.settingService.getAllSetting(request);
  }
}
