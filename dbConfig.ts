//

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost', // Connects to your local PostgreSQL server
  port: 5432, // Default PostgreSQL port (3306 is for MySQL)
  username: 'postgres', // Use the username you found
  password: 'yasowant264', // Replace with your actual password
  database: 'nestjs', // Replace with your actual database name
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
};
