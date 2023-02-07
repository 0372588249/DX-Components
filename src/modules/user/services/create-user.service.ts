import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestContext } from '../../../utils/request-context';
import { UserCreateDto } from '../dtos/user-create.dto';
import { UserDto } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    @InjectRepository(UserEntity)
    private readonly user: Repository<UserEntity>,
  ) {}

  async execute(
    context: RequestContext,
    body: UserCreateDto,
  ): Promise<UserDto> {
    const { correlationId, logger } = context;
    try {
      const dataa = await this.user.save(body);
      const data = await this.userRepository.createItem(body);
      return dataa;
    } catch (error) {
      const msg = 'Exception error in CreateUserService';

      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }
}
