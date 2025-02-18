import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { PropertyFeature } from './propertyFeature.entity';
import { Users } from './user.entity';
import { PropertyType } from './propertyType.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  // Define OneToOne relationship with PropertyFeature
  @OneToOne(
    () => PropertyFeature,
    (propertyFeature) => propertyFeature.property,
    { cascade: true },
  )
  @JoinColumn() // Required for One-to-One relationships
  propertyFeature: PropertyFeature;

  // Define Many-to-One relationship with Users (Each property belongs to one user)
  @ManyToOne(() => Users, (user) => user.properties, { onDelete: 'CASCADE' }) // Ensure proper cascading
  @JoinColumn({ name: 'ownerId' }) // Define custom foreign key column
  user: Users;

  // Define Many-to-Many relationship with Users (Properties can be liked by multiple users)
  @ManyToMany(() => Users, (user) => user.likedProperties)
  likedBy: Users[];
  @ManyToOne(() => PropertyType)
  type: PropertyType;
}
