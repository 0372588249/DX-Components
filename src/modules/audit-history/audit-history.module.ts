import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditHistoryEntity } from './entity/audit-history.entity';
import { AuditHistoryRepository } from './repository/audit-history.repository';
import { AuditHistoryService } from './services/audit-history.service';
import { AuditHistoryController } from './audit-history.controller';

@Module({
  controllers: [AuditHistoryController],
  imports: [TypeOrmModule.forFeature([AuditHistoryEntity])],
  exports: [AuditHistoryService],
  providers: [AuditHistoryRepository, AuditHistoryService],
})
export class AuditHistoryModule {}
