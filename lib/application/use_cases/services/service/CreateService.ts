import ServiceRepository from "../../../../domain/services/service/ServiceRepository";
import Service from "../../../../domain/services/service/Service";
import Boom from '@hapi/boom';

export default async (
  id: number,
  name: string,
  description: string,
  { serviceRepository }: { serviceRepository: ServiceRepository }
) => {

  if(await serviceRepository.getByFilter({ id }))
    throw Boom.forbidden("Service ID already exists, please choose another");

  if (await serviceRepository.getByFilter({ name }))
    throw Boom.forbidden("Service with this name already exists, please choose another");

  const service = new Service(id, name, description, {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  return await serviceRepository.persist(service);
};
