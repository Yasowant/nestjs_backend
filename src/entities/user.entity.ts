import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true }) // Ensures unique email values
  email: string;

  @Column()
  password: string;

  // Define One-to-Many relationship with Property (A user can own multiple properties)
  @OneToMany(() => Property, (property) => property.user, { cascade: true })
  properties: Property[];

  // Define Many-to-Many relationship with Property (Users can like multiple properties)
  @ManyToMany(() => Property, (property) => property.likedBy)
  @JoinTable() // Required on the owning side of Many-to-Many
  likedProperties: Property[];
}
