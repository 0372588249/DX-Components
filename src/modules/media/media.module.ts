import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaFileEntity } from './entity/media-file.entity';
import { MediaRepository } from './repository/media.repository';
import { MediaService } from './services/media.service';
import { MediaController } from './media.controller';
import { MediaSettingEntity } from './entity/media-setting.entity';
import { MediaFolderEntity } from './entity/media-folder.entity';

@Module({
  controllers: [MediaController],
  imports: [
    TypeOrmModule.forFeature([
      MediaFileEntity,
      MediaSettingEntity,
      MediaFolderEntity,
    ]),
  ],
  exports: [MediaService],
  providers: [MediaRepository, MediaService],
})
export class MediaModule {}
