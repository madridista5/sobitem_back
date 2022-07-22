import { registerAs } from '@nestjs/config';
import { config } from "./config";

export default registerAs('database', () => ({
  type: 'mysql',
  logging: true,
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  entities: ['dist/**/**.entity{.ts,.js}'],
  bigNumberStrings: false,
  synchronize: true, // wyłączyć to na produkcji
}));