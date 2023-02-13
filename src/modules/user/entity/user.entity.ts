import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const USER_TABLE = 'user';

@Entity(USER_TABLE, { schema: SCHEMA_NAME })
export class UserEntity extends AbstractEntity {
  @Column('varchar', { nullable: false, length: 191, name: 'email' })
  email: string;

  @Column({ nullable: true })
  email_verified_at?: number;

  @Column('varchar', { nullable: true, length: 191, name: 'password' })
  password?: string;

  @Column({ nullable: true, type: 'text' })
  refresh_token?: string;

  @Column('varchar', { nullable: true, length: 191, name: 'first_name' })
  first_name?: string;

  @Column('varchar', { nullable: true, length: 191, name: 'last_name' })
  last_name?: string;

  @Column('varchar', { nullable: true, length: 60, name: 'user_name' })
  user_name?: string;

  @Column({ nullable: true, type: 'int' })
  avatar_id?: number;

  @Column({ type: 'tinyint', default: 0 })
  is_super_user: number;

  @Column({ type: 'tinyint', default: 0 })
  is_manage_supers: number;

  @Column({ nullable: true, type: 'text' })
  permissions?: string;

  @Column({ nullable: true })
  last_login?: number;
}
