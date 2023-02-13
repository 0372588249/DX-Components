import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleUserEntity } from './entity/role-user.entity';
import { RoleEntity } from './entity/role.entity';
import { UserEntity } from './entity/user.entity';
import { RoleUserRepository } from './repository/role-user.repository';
import { UserRepository } from './repository/user.repository';
import { RoleUserService } from './services/role-user.service';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity, RoleUserEntity])],
  exports: [UserService],
  providers: [UserRepository, RoleUserRepository, UserService, RoleUserService],
})
export class UserModule {}
