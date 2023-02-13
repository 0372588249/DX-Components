import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const ROLE_TABLE = 'role';

@Entity(ROLE_TABLE, { schema: SCHEMA_NAME })
export class SettingEntity extends AbstractEntity {
  @Column('varchar', { nullable: false, length: 120, name: 'slug' })
  slug: number;

  @Column('varchar', { nullable: false, length: 120, name: 'name' })
  name: number;

  @Column({ nullable: false, type: 'text' })
  permissions: string;

  @Column('varchar', { nullable: false, length: 255, name: 'description' })
  description: number;

  @Column({ nullable: false, type: 'tinyint', default: 0 })
  is_default: number;

  @Column({ nullable: false, type: 'bigint' })
  created_by: number;

  @Column({ nullable: false, type: 'bigint' })
  updated_by: number;
}
