import ServiceScheduleRepository from "../../../../domain/services/service_schedule/ServiceScheduleRepository";
import Boom from '@hapi/boom';

export default async (serviceScheduleId: number, { serviceScheduleRepository }: { serviceScheduleRepository: ServiceScheduleRepository }) => {
  if(!(await serviceScheduleRepository.getByFilter({id: serviceScheduleId})))
    throw Boom.notFound('Schedule service not found');
  
  return await serviceScheduleRepository.remove(serviceScheduleId);
};
