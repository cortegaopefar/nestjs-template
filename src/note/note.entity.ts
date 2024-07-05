import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'title', length: 60, nullable: false })
  title: string;

  @Column({ name: 'content', length: 160, nullable: false })
  content: string;
}
