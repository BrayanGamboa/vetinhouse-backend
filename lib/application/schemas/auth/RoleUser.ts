import Joi from 'joi';

export const RoleUserPayloadSchema = Joi.object({
  id: Joi.number().required().example(1234),
  name: Joi.string().required().example("Administrador General"),
  description: Joi.string().required().example("Rol con todos los permisos en la plataforma"),
});

export const RoleUserResponseSchema = Joi.object({
  id: Joi.number().example(10),
  name: Joi.string().example("Paseador"),
  description: Joi.string().example("Rol con permisos para pasear mascotas"),
  info: Joi.object({
    createdAt: Joi.string().example("2025-08-31T20:10:00Z"),
    updatedAt: Joi.string().example("2025-08-31T20:10:00Z"),
  })
});

export const RoleUserListResponseSchema = Joi.array().items(RoleUserResponseSchema);
