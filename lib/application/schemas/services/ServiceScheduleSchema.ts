import Joi from 'joi';

export const ServiceSchedulePayloadSchema = Joi.object({
  id: Joi.number().required().example(7),
  name: Joi.string().required().example("Horario - Sede Principal"),
  schedule: Joi.object({
    openAllTime: Joi.boolean().example(false),
    monday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() })
    ).when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    tuesday:
      Joi.array().items(
        Joi.object({ init: Joi.number(), finish: Joi.number() }))
        .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    wednesday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    thursday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    friday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    saturday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    sunday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
  }).example({
    openAllTime: false,
    monday: [{ init: 8, finish: 20 }],
    tuesday: [{ init: 8, finish: 20 }],
    wednesday: [{ init: 8, finish: 20 }],
    thursday: [{ init: 8, finish: 20 }],
    friday: [{ init: 8, finish: 20 }],
    saturday: [{ init: 10, finish: 18 }],
    sunday: [{ init: 10, finish: 18 }]
  }),
});

export const ServiceScheduleResponseSchema = Joi.object({
  id: Joi.number().required().example(7),
  name: Joi.string().required().example("Horario - Sede Principal"),
  schedule: Joi.object({
    openAllTime: Joi.boolean().example(false),
    monday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() })
    ).when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    tuesday:
      Joi.array().items(
        Joi.object({ init: Joi.number(), finish: Joi.number() }))
        .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    wednesday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    thursday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    friday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    saturday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
    sunday: Joi.array().items(
      Joi.object({ init: Joi.number(), finish: Joi.number() }))
      .when('openAllTime', { is: false, then: Joi.optional(), otherwise: Joi.required() }),
  }).example({
    openAllTime: false,
    monday: [{ init: 8, finish: 20 }],
    tuesday: [{ init: 8, finish: 20 }],
    wednesday: [{ init: 8, finish: 20 }],
    thursday: [{ init: 8, finish: 20 }],
    friday: [{ init: 8, finish: 20 }],
    saturday: [{ init: 10, finish: 18 }],
    sunday: [{ init: 10, finish: 18 }]
  }),
  info: Joi.object({
    createdAt: Joi.string().example("2025-08-31T20:10:00Z"),
    updatedAt: Joi.string().example("2025-08-31T20:10:00Z"),
  })
});

export const ServiceScheduleListResponseSchema = Joi.array().items(ServiceScheduleResponseSchema);
