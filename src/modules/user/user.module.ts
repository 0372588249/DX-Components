import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserService } from './services/create-user.service';
import { GetAllUserService } from './services/get-all-user.service';
import { GetUserByIdService } from './services/get-user-by-id.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity, UserRepository])],
  exports: [GetUserByIdService, CreateUserService, GetAllUserService],
  providers: [GetUserByIdService, CreateUserService, GetAllUserService],
})
export class UserModule {}
