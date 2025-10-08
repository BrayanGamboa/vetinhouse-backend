import { InfoResponse, ScheduleSchema } from '../../../application/utilities/general_functions';

export default class ServiceSchedule {
  id: number;
  name: string;
  schedule: ScheduleSchema;
  info: InfoResponse;

  constructor();
  constructor(
    id: number,
    name: string,
    schedule: ScheduleSchema,
    info: InfoResponse,
  );

  constructor(
    id?: number,
    name?: string,
    schedule?: ScheduleSchema,
    info?: InfoResponse,
  ) {
    this.id = id ?? 0;
    this.name = name ?? "";
    this.schedule = schedule ?? {} as ScheduleSchema;
    this.info = info ?? {} as InfoResponse;
  }
}
