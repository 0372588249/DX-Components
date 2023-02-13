import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { RoleUserEntity } from '../entity/role-user.entity';

@Injectable()
export class RoleUserRepository extends Repository<RoleUserEntity> {
  constructor(private dataSource: DataSource) {
    super(RoleUserEntity, dataSource.createEntityManager());
  }

  async getAll(): Promise<RoleUserEntity[]> {
    const data = await this.find();
    return data ?? [];
  }
}
