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
  }
});
