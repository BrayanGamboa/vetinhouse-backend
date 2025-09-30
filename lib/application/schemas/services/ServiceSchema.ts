import Joi from 'joi';

export const ServicePayloadSchema = Joi.object({
  id: Joi.number().required().example(7),
  name: Joi.string().required().example("Servicio de urgencias"),
  description: Joi.string().required().example("Se realiza la valoración de la mascota, para determinar la gravedad del problema"),
  value: Joi.number().example(30.000),
  scheduleServicioId: Joi.number().required().example(2),
});

export const ServiceResponseSchema = Joi.object({
  id: Joi.number().example(5),
  name: Joi.string().example("Peluquería"),
  description: Joi.string().example("Lavado de mascotas. Incluye: corte de uñas, corte de pelo, pañoleta de decoración y perfume"),
  value: Joi.number().example(80.000),
  scheduleServicioId: Joi.number().example(5),
  info: Joi.object({
    createdAt: Joi.string().example("2025-08-31T20:10:00Z"),
    updatedAt: Joi.string().example("2025-08-31T20:10:00Z"),
  })
});

export const ServiceListResponseSchema = Joi.array().items(ServiceResponseSchema);
