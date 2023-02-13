import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const ROLE_USER_TABLE = 'role_user';

@Entity(ROLE_USER_TABLE, { schema: SCHEMA_NAME })
export class SettingEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'int' })
  user_id: number;

  @Column({ nullable: false, type: 'int' })
  role_id: number;
}
