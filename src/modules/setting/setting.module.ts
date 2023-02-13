import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingEntity } from './entity/setting.entity';
import { SettingRepository } from './repository/setting.repository';
import { SettingService } from './services/setting.service';
import { SettingController } from './setting.controller';

@Module({
  controllers: [SettingController],
  imports: [TypeOrmModule.forFeature([SettingEntity])],
  exports: [SettingService],
  providers: [SettingRepository, SettingService],
})
export class SettingModule {}
