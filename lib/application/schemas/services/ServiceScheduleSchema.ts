import Joi from 'joi';

export const ServiceSchedulePayloadSchema = Joi.object({
  id: Joi.number().required().example(7),
  name: Joi.string().required().example("Horario - Sede Principal"),
  schedule: Joi.object({
    openAllTime: Joi.boolean().example(false),
    monday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() })
    ).when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    tuesday:
      Joi.array().items(
        Joi.object({ init: Joi.string(), finish: Joi.string() }))
        .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    wednesday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    thursday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    friday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    saturday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    sunday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
  }).example({
    openAllTime: false,
    monday: [{ init: "08:00", finish: "20:00" }],
    tuesday: [{ init: "08:00", finish: "20:00" }],
    wednesday: [{ init: "08:00", finish: "20:00" }],
    thursday: [{ init: "08:00", finish: "20:00" }],
    friday: [{ init: "08:00", finish: "20:00" }],
    saturday: [{ init: "10:00", finish: "18:00" }],
    sunday: [{ init: "10:00", finish: "18:00" }]
  }),
});

export const ServiceScheduleResponseSchema = Joi.object({
  id: Joi.number().required().example(7),
  name: Joi.string().required().example("Horario - Sede Principal"),
  schedule: Joi.object({
    openAllTime: Joi.boolean().example(false),
    monday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() })
    ).when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    tuesday:
      Joi.array().items(
        Joi.object({ init: Joi.string(), finish: Joi.string() }))
        .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    wednesday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    thursday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    friday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    saturday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
    sunday: Joi.array().items(
      Joi.object({ init: Joi.string(), finish: Joi.string() }))
      .when('openAllTime', { is: true, then: Joi.optional(), otherwise: Joi.required() }),
  }).example({
    openAllTime: false,
    monday: [{ init: "08:00", finish: "20:00" }],
    tuesday: [{ init: "08:00", finish: "20:00" }],
    wednesday: [{ init: "08:00", finish: "20:00" }],
    thursday: [{ init: "08:00", finish: "20:00" }],
    friday: [{ init: "08:00", finish: "20:00" }],
    saturday: [{ init: "10:00", finish: "18:00" }],
    sunday: [{ init: "10:00", finish: "18:00" }]
  }),
  info: Joi.object({
    createdAt: Joi.string().example("2025-08-31T20:10:00Z"),
    updatedAt: Joi.string().example("2025-08-31T20:10:00Z"),
  })
});

export const ServiceScheduleListResponseSchema = Joi.array().items(ServiceScheduleResponseSchema);
