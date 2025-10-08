import ServiceScheduleRepository from "../../../../domain/services/service_schedule/ServiceScheduleRepository";
import ServiceSchedule from "../../../../domain/services/service_schedule/ServiceSchedule";
import Boom from '@hapi/boom';
import { ScheduleSchema } from "../../../utilities/general_functions";

export default async (
  id: number,
  name: string,
  schedule: ScheduleSchema,
  { serviceScheduleRepository }: { serviceScheduleRepository: ServiceScheduleRepository }
) => {

  if(await serviceScheduleRepository.getByFilter({ id }))
    throw Boom.forbidden("Schedule service ID already exists, please choose another");

  if (await serviceScheduleRepository.getByFilter({ name }))
    throw Boom.forbidden("Schedule service with this name already exists, please choose another");

  const serviceSchedule = new ServiceSchedule(id, name, schedule, {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  return await serviceScheduleRepository.persist(serviceSchedule);
};
