import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const SETTING_TABLE = 'setting';

@Entity(SETTING_TABLE, { schema: SCHEMA_NAME })
export class SettingEntity extends AbstractEntity {
  @Column('varchar', { nullable: false, length: 191, name: 'key' })
  key: string;

  @Column({ nullable: true, type: 'text' })
  value?: string;
}
