import Service from "../../../domain/services/service/Service";
import Boom from "@hapi/boom";

const _serializeSingleService = (service: Service) => {
  return {
    'id': service.id,
    'name': service.name,
    'description': service.description,
    'value': service.value,
    'scheduleServicioId': service.scheduleServicioId,
    'info': {
      createdAt: service.info?.created_at,
      updatedAt: service.info?.updated_at
    }
  };
};

export default class {
  serialize(data: Service) {
    if (!data) {
      throw Boom.badData('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleService);
    }
    return _serializeSingleService(data);
  }

};