import Joi from 'joi';

export const UserPayloadSchema = Joi.object({
  document: Joi.string().required().example("123456789"),
  name: Joi.string().required().example("Brayan"),
  lastName: Joi.string().required().example("Gamboa"),
  email: Joi.string().email().required().example("brayan@email.com"),
  password: Joi.string().required().example("secret123"),
  roleId: Joi.number().required().example(2),
  documentTypeId: Joi.number().required().example(1),
});

export const UserResponseSchema = Joi.object({
  document: Joi.string().example("123456789"),
  name: Joi.string().example("Brayan"),
  lastName: Joi.string().allow("").example("Gamboa"),
  email: Joi.string().example("brayan@email.com"),
  password: Joi.string().example("Hola mundo!#"),
  roleId: Joi.number().example(2),
  documentTypeId: Joi.number().example(1),
  info: Joi.object({
    createdAt: Joi.date().iso().example("2025-08-31T20:10:00Z"),
    updatedAt: Joi.date().iso().example("2025-08-31T20:10:00Z"),
  })
});

export const UserListResponseSchema = Joi.array().items(UserResponseSchema);