import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';
import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';

export const ROLE_USER_TABLE = 'role_user';

@Entity(ROLE_USER_TABLE, { schema: SCHEMA_NAME })
export class RoleUserEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'bigint', unsigned: true })
  user_id: bigint;

  @Column({ nullable: false, type: 'int', unsigned: true })
  role_id: number;

  @ManyToOne(() => RoleEntity, (role) => role.role_users)
  @JoinColumn({ name: 'id' })
  role: RoleEntity;

  @OneToOne(() => UserEntity, (user) => user.role_user)
  user: RoleEntity;
}
