// import { Users } from 'src/entities/user.entity';
// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// export const pgConfig: PostgresConnectionOptions = {
//   url: 'postgresql://neondb_owner:npg_r0ogcjAVCv5e@ep-fragrant-hall-a4c948k9-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
//   type: 'postgres',
//   port: 3306,
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };

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
