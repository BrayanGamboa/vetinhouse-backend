import Boom from "@hapi/boom";
import ServiceSchedule from "../../../domain/services/service_schedule/ServiceSchedule";

const _serializeSingleServiceSchedule = (serviceSchedule: ServiceSchedule) => {
  return {
    'id': serviceSchedule.id,
    'name': serviceSchedule.name,
    'schedule': serviceSchedule.schedule,
    'info': {
      createdAt: serviceSchedule.info?.created_at,
      updatedAt: serviceSchedule.info?.updated_at
    }
  };
};

export default class {
  serialize(data: ServiceSchedule) {
    if (!data) {
      throw Boom.badData('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleServiceSchedule);
    }
    return _serializeSingleServiceSchedule(data);
  }

};