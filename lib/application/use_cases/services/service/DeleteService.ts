import ServiceRepository from "../../../../domain/services/service/ServiceRepository";
import Boom from '@hapi/boom';

export default async (serviceId: number, { serviceRepository }: { serviceRepository: ServiceRepository}) => {
  if(!(await serviceRepository.getByFilter({id: serviceId})))
    throw Boom.notFound('Service not found');
  
  return await serviceRepository.remove(serviceId);
};
