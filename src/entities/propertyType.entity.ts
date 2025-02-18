import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PropertyType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;
}
