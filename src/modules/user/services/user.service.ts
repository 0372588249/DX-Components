import { Injectable } from '@nestjs/common';
import { RequestContext } from '../../../utils/request-context';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserDto } from '../dto/user.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(
    context: RequestContext,
    body: UserCreateDto,
  ): Promise<UserDto> {
    const { correlationId, logger } = context;
    try {
      return await this.userRepository.createItem(body);
    } catch (error) {
      const msg = 'Exception error in CreateUserService';

      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }

  async getUserById(context: RequestContext, id: bigint): Promise<UserDto> {
    const { correlationId, logger } = context;
    try {
      return await this.userRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      const msg = 'Exception error in GetUserByIdService';
      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }

  async getAllUser(context: RequestContext): Promise<any> {
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
