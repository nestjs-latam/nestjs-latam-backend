import { ConfigType } from '../types/config.type';

export const configLoader = (): ConfigType => ({
  server: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10)
  },
  microservices: {
    accounts: {
      host: process.env.ACCOUNTS_HOST,
      port: parseInt(process.env.ACCOUNTS_PORT, 10)
    }
  }
});
