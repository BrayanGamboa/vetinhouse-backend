import Service from "../../../domain/services/service/Service";

const _serializeSingleService = (service: Service) => {
  return {
    'id': service.id,
    'name': service.name,
    'description': service.description,
    'info': {
      createdAt: service.info?.created_at,
      updatedAt: service.info?.updated_at
    }
  };
};

export default class {
  serialize(data: Service) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleService);
    }
    return _serializeSingleService(data);
  }

};