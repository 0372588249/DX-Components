import { Column, Entity } from 'typeorm';
import {
  AbstractEntity,
  SCHEMA_NAME,
} from '../../../database/entity/abstract.entity';

export const MEDIA_FOLDER_TABLE = 'media_folder';

@Entity(MEDIA_FOLDER_TABLE, { schema: SCHEMA_NAME })
export class MediaFolderEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'bigint' })
  user_id: bigint;

  @Column('varchar', { nullable: true, length: 191, name: 'name' })
  name: string;

  @Column('varchar', { nullable: true, length: 191, name: 'slug' })
  slug: string;

  @Column({ nullable: false, type: 'int', default: 0 })
  parent_id: number;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deleted_at: string;
}
