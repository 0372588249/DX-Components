import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const MEDIA_SETTING_TABLE = 'media_setting';

@Entity(MEDIA_SETTING_TABLE, { schema: SCHEMA_NAME })
export class MediaSettingEntity extends AbstractEntity {
  @Column({ nullable: true, type: 'bigint' })
  user_id: bigint;

  @Column('varchar', { nullable: false, length: 120, name: 'key' })
  key: string;

  @Column({ nullable: true, type: 'text' })
  value: string;

  @Column({ nullable: true, type: 'int' })
  media_id: number;
}
