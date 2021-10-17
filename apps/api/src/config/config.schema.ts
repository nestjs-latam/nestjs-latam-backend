import * as Joi from 'joi';

export const configSchema = Joi.object({
  HOST: Joi.string().default('localhost'),
  PORT: Joi.number().required(),
  JWT_EXPIRES: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  ACCOUNTS_HOST: Joi.string().required(),
  ACCOUNTS_PORT: Joi.number().required()
});
