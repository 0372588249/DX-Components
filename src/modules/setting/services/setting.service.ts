import { Injectable } from '@nestjs/common';
import { RequestContext } from '../../../utils/request-context';
import { SettingRepository } from '../repository/setting.repository';

@Injectable()
export class SettingService {
  constructor(private readonly settingRepository: SettingRepository) {}

  async getAllSetting(context: RequestContext): Promise<any> {
    const { correlationId, logger } = context;
    try {
      const data = await this.settingRepository.find();
      return data;
    } catch (error) {
      const msg = 'Exception error in GetAllSettingService';
      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }
}
