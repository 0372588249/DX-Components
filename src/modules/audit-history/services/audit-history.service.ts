import { Injectable } from '@nestjs/common';
import { RequestContext } from '../../../utils/request-context';
import { AuditHistoryRepository } from '../repository/audit-history.repository';

@Injectable()
export class AuditHistoryService {
  constructor(
    private readonly auditHistoryRepository: AuditHistoryRepository,
  ) {}

  async getAllAuditHistory(context: RequestContext): Promise<any> {
    const { correlationId, logger } = context;
    try {
      const data = await this.auditHistoryRepository.find();
      return data;
    } catch (error) {
      const msg = 'Exception error in GetAllAuditHistoryService';
      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }
}
