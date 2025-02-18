import { Property } from '../entities/property.entity';
import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';

export const PropertyFactory = setSeederFactory(Property, async () => {
  const property = new Property();

  property.name = faker.company.name(); // Generates a random property name
  property.description = faker.lorem.sentence(); // Generates a short description
  property.price = faker.number.int({ min: 50000, max: 500000 }); // Generates a random price

  // We are not assigning relationships (`user`, `propertyFeature`, `likedBy`) because they require real entities.
  // You may need to manually assign them in seeders or use `factory.associate()`.

  return property;
});
