import Joi from 'joi';

export const DocumentTypePayloadSchema = Joi.object({
  id: Joi.number().required().example(7),
  name: Joi.string().required().example("Cédula de Ciudadanía"),
  description: Joi.string().required().example("Documento de identidad para ciudadanos colombianos"),
});

export const DocumentTypeResponseSchema = Joi.object({
  id: Joi.number().example(5),
  name: Joi.string().example("P.P.T"),
  description: Joi.string().example("Permiso por Protección Temporal - Venezuela"),
  info: Joi.object({
    createdAt: Joi.string().example("2025-08-31T20:10:00Z"),
    updatedAt: Joi.string().example("2025-08-31T20:10:00Z"),
  })
});

export const DocumentTypeListResponseSchema = Joi.array().items(DocumentTypeResponseSchema);
