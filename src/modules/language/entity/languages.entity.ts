import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const LANGUAGE_TABLE = 'language';

@Entity(LANGUAGE_TABLE, { schema: SCHEMA_NAME })
export class LanguageEntity extends AbstractEntity {
  @Column('varchar', { nullable: false, length: 120, name: 'name' })
  name: string;

  @Column('varchar', { nullable: false, length: 20, name: 'locale' })
  locale: string;

  @Column('varchar', { nullable: false, length: 20, name: 'code' })
  code: string;

  @Column({ nullable: false, type: 'tinyint', default: 0 })
  is_default: string;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deleted_at: string;
}
