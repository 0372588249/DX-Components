import { Injectable } from '@nestjs/common';
import { RequestContext } from '../../../utils/request-context';
import { RoleUserRepository } from '../repository/role-user.repository';

@Injectable()
export class RoleUserService {
  constructor(private readonly roleUserRepository: RoleUserRepository) {}

  async getAllRoleUser(context: RequestContext): Promise<any> {
    const { correlationId, logger } = context;
    try {
      const data = await this.roleUserRepository.find();
      return data;
    } catch (error) {
      const msg = 'Exception error in GetAllRoleUserService';
      logger.error({
        msg,
        correlationId,
      });
      throw error;
    }
  }
}
