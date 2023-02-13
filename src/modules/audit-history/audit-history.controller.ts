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
import { AuditHistoryService } from './services/audit-history.service';

@Controller('audit-history')
export class AuditHistoryController {
  constructor(private readonly auditHistoryService: AuditHistoryService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllAuditHistory(@Req() request: AppRequest) {
    return this.auditHistoryService.getAllAuditHistory(request);
  }
}
