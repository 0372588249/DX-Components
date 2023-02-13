import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { SettingEntity } from '../entity/setting.entity';

@Injectable()
export class SettingRepository extends Repository<SettingEntity> {
  constructor(private dataSource: DataSource) {
    super(SettingEntity, dataSource.createEntityManager());
  }

  async getAll(): Promise<SettingEntity[]> {
    const data = await this.find();
    return data ?? [];
  }
}
