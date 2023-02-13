import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const MEDIA_FILE_TABLE = 'media_file';

@Entity(MEDIA_FILE_TABLE, { schema: SCHEMA_NAME })
export class MediaFileEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'bigint' })
  user_id: bigint;

  @Column('varchar', { nullable: false, length: 255, name: 'name' })
  name: string;

  @Column({ nullable: false, type: 'int', default: 0 })
  folder_id: number;

  @Column('varchar', { nullable: false, length: 120, name: 'mime_type' })
  mime_type: string;

  @Column({ nullable: false, type: 'int' })
  size: number;

  @Column('varchar', { nullable: false, length: 255, name: 'url' })
  url: string;

  @Column({ nullable: true, type: 'text' })
  options: string;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deleted_at: string;
}
