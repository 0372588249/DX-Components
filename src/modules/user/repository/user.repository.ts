import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserCreateDto } from '../dto/user-create.dto';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async createItem(userData: UserCreateDto): Promise<UserEntity> {
    const createdUser = await this.save(userData);
    const data = await this.findOneOrFail({ where: { id: createdUser.id } });
    return data;
  }

  async getAll(): Promise<UserEntity[]> {
    const data = await this.find();
    return data ?? [];
  }
}
