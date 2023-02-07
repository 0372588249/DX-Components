import { Injectable } from '@nestjs/common';
import { RequestContext } from '../../../utils/request-context';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class GetUserByIdService {
  constructor(private userRepository: UserRepository) {}

  async execute(context: RequestContext, id: number): Promise<any> {
    const { correlationId, logger } = context;
    try {
      return;
    } catch (error) {
      const msg = 'Exception error in GetUserByIdService';
      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }
}
