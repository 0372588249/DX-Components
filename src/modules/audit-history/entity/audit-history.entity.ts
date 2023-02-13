import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const AUDIT_HISTORY_TABLE = 'audit_history';

@Entity(AUDIT_HISTORY_TABLE, { schema: SCHEMA_NAME })
export class AuditHistoryEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'bigint' })
  user_id: bigint;

  @Column('varchar', { nullable: false, length: 60, name: 'module' })
  module: string;

  @Column({ nullable: true, type: 'text' })
  request: string;

  @Column('varchar', { nullable: false, length: 120, name: 'action' })
  action: string;

  @Column({ nullable: true, type: 'text' })
  user_agent: string;

  @Column('varchar', { nullable: true, length: 39, name: 'ip_address' })
  ip_address: string;

  @Column({ nullable: false, type: 'int' })
  reference_user: number;

  @Column({ nullable: false, type: 'int' })
  reference_id: number;

  @Column('varchar', { nullable: false, length: 255, name: 'reference_name' })
  reference_name: string;

  @Column('varchar', { nullable: false, length: 20, name: 'type' })
  type: string;
}
