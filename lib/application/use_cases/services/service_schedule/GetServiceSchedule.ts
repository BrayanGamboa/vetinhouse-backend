import ServiceScheduleRepository from "../../../../domain/services/service_schedule/ServiceScheduleRepository";
import ServiceSchedule from "../../../../domain/services/service_schedule/ServiceSchedule";

export default async (id: number, { serviceScheduleRepository }: { serviceScheduleRepository: ServiceScheduleRepository }): Promise<ServiceSchedule> => {
  
  return await serviceScheduleRepository.getByFilter({id});
};