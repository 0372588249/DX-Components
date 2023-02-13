import { Injectable } from '@nestjs/common';
import { RequestContext } from '../../../utils/request-context';
import { MediaRepository } from '../repository/media.repository';

@Injectable()
export class MediaService {
  constructor(private readonly mediaRepository: MediaRepository) {}

  async getAllMedia(context: RequestContext): Promise<any> {
    const { correlationId, logger } = context;
    try {
      const data = await this.mediaRepository.find();
      return data;
    } catch (error) {
      const msg = 'Exception error in GetAllMediaService';
      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }
}
