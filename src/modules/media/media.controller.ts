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

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllMedia(@Req() request: AppRequest) {
    return this.mediaService.getAllMedia(request);
  }
}
