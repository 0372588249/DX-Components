import {
  AfterLoad,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

export const SCHEMA_NAME = 'marketPlace';

export interface IAbstractEntity {
  id: bigint;
  created_at?: Timestamp;
  updated_at?: Timestamp;
  __entity?: string;
}
export abstract class AbstractEntity
  extends BaseEntity
  implements IAbstractEntity
{
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: bigint;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at?: Timestamp;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at?: Timestamp;
  __entity?: string;

  @AfterLoad()
  setEntityName() {
    this.__entity = this.constructor.name;
  }
}
