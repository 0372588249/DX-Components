import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { MediaFileEntity } from '../entity/media-file.entity';

@Injectable()
export class MediaRepository extends Repository<MediaFileEntity> {
  constructor(private dataSource: DataSource) {
    super(MediaFileEntity, dataSource.createEntityManager());
  }

  async getAll(): Promise<MediaFileEntity[]> {
    const data = await this.find();
    return data ?? [];
  }
}
