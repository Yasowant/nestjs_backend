import { Users } from '../entities/user.entity';
import { setSeederFactory } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker'; // ✅ Use `faker` directly

export const UserFactory = setSeederFactory(Users, async () => {
  const user = new Users();

  user.name = faker.person.fullName(); // ✅ Generate a fake name
  user.email = faker.internet.email(); // ✅ Generate a fake email

  // Hash the password before storing
  const plainPassword = 'password123'; // Default password
  user.password = await bcrypt.hash(plainPassword, 10);

  return user;
});
