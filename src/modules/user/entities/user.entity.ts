import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entities/abstract.entity';

export const USER_TABLE = 'user';

@Entity(USER_TABLE, { schema: SCHEMA_NAME })
export class UserEntity extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  email: string;

  @Column({ nullable: true })
  email_verified_at?: number;

  @Column({ nullable: true, type: 'text' })
  password?: string;

  @Column({ nullable: true, type: 'text' })
  refresh_token?: string;

  @Column({ nullable: true, type: 'text' })
  first_name?: string;

  @Column({ nullable: true, type: 'text' })
  last_name?: string;

  @Column({ nullable: true, type: 'text' })
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
