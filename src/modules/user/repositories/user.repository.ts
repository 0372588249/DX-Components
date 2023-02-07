import { EntityRepository, Repository } from 'typeorm';
import { UserCreateDto } from '../dtos/user-create.dto';
// import { UserUpdateDto } from '../dtos/user-update.dto';
import { UserEntity } from '../entities/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createItem(userData: UserCreateDto): Promise<UserEntity> {
    const createdUser = await this.save(userData);
    const data = await this.findOneOrFail({ where: { id: createdUser.id } });
    return data;
  }

  //   async updateItem(dto: UserUpdateDto): Promise<UserEntity> {
  //     const updatedUser = await this.save(dto);
  //     const data = await this.findOneOrFail(updatedUser.id);
  //     return data;
  //   }

  //   async getItem(id: number): Promise<UserEntity | undefined> {
  //     const data = await this.findOne(id);
  //     return data;
  //   }

  async getAll(): Promise<UserEntity[]> {
    const data = await this.find();
    return data ?? [];
  }
}
