import Boom from "@hapi/boom";
import ServiceSchedule from "../../../domain/services/service_schedule/ServiceSchedule";
import { DAYS, ScheduleSchema } from "../../../application/utilities/general_functions";

interface SerializedServiceSchedule {
  id: number;
  name: string;
  schedule: ScheduleSchema;
  info: {
    createdAt?: string;
    updatedAt?: string;
  };
}

export default class ServiceScheduleSerializer {
  /**
   * Serialize multiple ServiceSchedule
   * @param data - One or several ServiceSchedule
   * @returns SerializedServiceSchedule or an array of them
   * @throws Boom.badData - If data is null or undefined
   */
  serialize(
    data: ServiceSchedule | ServiceSchedule[]
  ): SerializedServiceSchedule | SerializedServiceSchedule[] {
    if (!data) {
      throw Boom.badData('Expected data to be not undefined nor null');
    }

    if (Array.isArray(data)) {
      return data.map(item => this.serializeSingle(item));
    }

    return this.serializeSingle(data);
  }

  /**
   * Serialize one ServiceSchedule
   * @param serviceSchedule - Entity ServiceSchedule
   * @returns Object serialize for response HTTP
   * @throws Boom.badData - If serviceSchedule is null or undefined
   */
  private serializeSingle(serviceSchedule: ServiceSchedule): SerializedServiceSchedule {
    const schedule = this.normalizeSchedule(serviceSchedule.schedule);

    return {
      id: serviceSchedule.id,
      name: serviceSchedule.name,
      schedule,
      info: {
        createdAt: serviceSchedule.info?.created_at,
        updatedAt: serviceSchedule.info?.updated_at
      }
    };
  }

  /**
   * Init the schedule: in case openAllTime is true, init all days empty arrays
   * @param schedule - Schedule to normalize
   * @returns Schedule normalized
   */
  private normalizeSchedule(schedule: ScheduleSchema): ScheduleSchema {
    const normalized = { ...schedule };

    if (normalized.openAllTime) {
      DAYS.forEach(day => {
        if (!normalized[day]) {
          normalized[day] = [];
        }
      });
    }

    return normalized;
  }
}