import ServiceScheduleRepository from "../../../../domain/services/service_schedule/ServiceScheduleRepository";
import ServiceSchedule from "../../../../domain/services/service_schedule/ServiceSchedule";

export default async ({ serviceScheduleRepository }: { serviceScheduleRepository: ServiceScheduleRepository }): Promise<ServiceSchedule[]> => { 
  return await serviceScheduleRepository.getByFilter({});
};
