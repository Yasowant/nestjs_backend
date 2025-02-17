import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parkingSpots: number;

  @Column()
  area: number;

  @Column()
  hasBalcony: boolean;

  @Column()
  hasGardenYard: boolean;

  @Column()
  hasSwimmingPool: boolean;

  // Define OneToOne relationship with Property and add @JoinColumn to make it the owner
  @OneToOne(() => Property, (property) => property.propertyFeature)
  @JoinColumn() // This ensures PropertyFeature owns the foreign key
  property: Property;
}
