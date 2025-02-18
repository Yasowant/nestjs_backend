import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/propertyFeature.entity';

export const PropertyFeatureFactory = setSeederFactory(
  PropertyFeature,
  async () => {
    const propertyFeature = new PropertyFeature();

    propertyFeature.bedrooms = faker.number.int({ min: 1, max: 6 });
    propertyFeature.bathrooms = faker.number.int({ min: 1, max: 4 });
    propertyFeature.parkingSpots = faker.number.int({ min: 0, max: 3 });
    propertyFeature.area = faker.number.int({ min: 500, max: 5000 });
    propertyFeature.hasBalcony = faker.datatype.boolean();
    propertyFeature.hasGardenYard = faker.datatype.boolean();
    propertyFeature.hasSwimmingPool = faker.datatype.boolean();

    // We are not assigning `property` here since it needs an existing Property entity.
    // This should be handled in the main seeding logic.

    return propertyFeature;
  },
);
