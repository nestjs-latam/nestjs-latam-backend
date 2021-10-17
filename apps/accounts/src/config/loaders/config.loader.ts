import { ConfigType } from '../types/config.type';

export const configLoader = (): ConfigType => ({
  server: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10)
  },
  microservices: {
    notifications: {
      host: process.env.NOTIFICATIONS_HOST,
      port: parseInt(process.env.NOTIFICATIONS_PORT, 10)
    }
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME
  }
});
