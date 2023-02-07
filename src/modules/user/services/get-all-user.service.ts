import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestContext } from '../../../utils/request-context';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class GetAllUserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(context: RequestContext): Promise<any> {
    const { correlationId, logger } = context;
    try {
      const data = await this.userRepository.find();
      return data;
    } catch (error) {
      const msg = 'Exception error in GetAllUserService';
      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }
}
