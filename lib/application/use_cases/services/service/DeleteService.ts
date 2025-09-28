import ServiceRepository from "../../../../domain/services/service/ServiceRepository";
import Boom from '@hapi/boom';

export default async (documentTypeId: number, { serviceRepository }: { serviceRepository: ServiceRepository}) => {
  if(!(await serviceRepository.getByFilter({id: documentTypeId})))
    throw Boom.notFound('Document type not found');
  
  return await serviceRepository.remove(documentTypeId);
};
