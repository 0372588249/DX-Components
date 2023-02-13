import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const TRANSLATION_TABLE = 'translation';

@Entity(TRANSLATION_TABLE, { schema: SCHEMA_NAME })
export class TranslationEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'int', default: 0 })
  status: number;

  @Column('varchar', { nullable: false, length: 191, name: 'locale' })
  locale: string;

  @Column('varchar', { nullable: false, length: 191, name: 'group' })
  group: string;

  @Column('varchar', { nullable: false, length: 191, name: 'key' })
  key: string;

  @Column({ nullable: true, type: 'text' })
  value: string;
}
