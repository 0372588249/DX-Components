import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageEntity } from './entity/languages.entity';
import { TranslationEntity } from './entity/translation.entity';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([LanguageEntity, TranslationEntity])],
  exports: [],
  providers: [],
})
export class LanguageModule {}
