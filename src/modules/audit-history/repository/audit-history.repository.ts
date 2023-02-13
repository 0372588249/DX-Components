import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuditHistoryEntity } from '../entity/audit-history.entity';

@Injectable()
export class AuditHistoryRepository extends Repository<AuditHistoryEntity> {
  constructor(private dataSource: DataSource) {
    super(AuditHistoryEntity, dataSource.createEntityManager());
  }

  async getAll(): Promise<AuditHistoryEntity[]> {
    const data = await this.find();
    return data ?? [];
  }
}
