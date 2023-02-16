import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';
import { RoleUserEntity } from './role-user.entity';

export const ROLE_TABLE = 'role';

@Entity(ROLE_TABLE, { schema: SCHEMA_NAME })
export class RoleEntity extends AbstractEntity {
  @Column('varchar', { nullable: false, length: 120, name: 'slug' })
  slug: number;

  @Column('varchar', { nullable: false, length: 120, name: 'name' })
  name: number;

  @Column({ nullable: true, type: 'text' })
  permissions: string;

  @Column('varchar', { nullable: true, length: 255, name: 'description' })
  description: number;

  @Column({ nullable: false, type: 'tinyint', default: 0, unsigned: true })
  is_default: number;

  @Column({ nullable: false, type: 'bigint', unsigned: true })
  created_by: number;

  @Column({ nullable: false, type: 'bigint', unsigned: true })
  updated_by: number;

  @OneToMany(() => RoleUserEntity, (role_user) => role_user.role)
  @JoinColumn({ name: 'role_id' })
  role_users: RoleUserEntity;
}
