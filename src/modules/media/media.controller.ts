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
import { MediaService } from './services/media.service';

@Controller('setting')
export class MediaController {
  constructor(private readonly settingService: MediaService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllMedia(@Req() request: AppRequest) {
    return this.settingService.getAllMedia(request);
  }
}
