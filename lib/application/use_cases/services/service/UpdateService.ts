import ServiceRepository from "../../../../domain/services/service/ServiceRepository";
import Boom from '@hapi/boom';

export default async (
  id: number,
  fields: any,
  { serviceRepository }: { serviceRepository: ServiceRepository }
) => {

  if (!(await serviceRepository.getByFilter(id)))
    throw Boom.notFound("Service not found")

  if (fields?.id) {
    if (await serviceRepository.getByFilter({ id : fields.id }))
      throw Boom.forbidden("Service with this ID already exists, please choose another");
  }

  if (fields?.name) {
    if (await serviceRepository.getByFilter({ name: fields.name }))
      throw Boom.forbidden("Service with this name already exists, please choose another");
  }

  return await serviceRepository.update(id, fields);
};
