import {
  AfterLoad,
  BaseEntity,
  Column,
  PrimaryColumn,
  Timestamp,
} from 'typeorm';

export const SCHEMA_NAME = 'marketPlace';

export interface IAbstractEntity {
  id: number;
  created_at: Timestamp;
  updated_at: Timestamp;
  __entity?: string;
}
export abstract class AbstractEntity
  extends BaseEntity
  implements IAbstractEntity
{
  @PrimaryColumn({ generated: true })
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Timestamp;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Timestamp;
  __entity?: string;

  @AfterLoad()
  setEntityName() {
    this.__entity = this.constructor.name;
  }
}
