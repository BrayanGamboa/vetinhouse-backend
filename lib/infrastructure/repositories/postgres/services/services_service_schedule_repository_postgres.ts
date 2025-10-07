import ServiceSchedule from "../../../../domain/services/service_schedule/ServiceSchedule";
import ServiceScheduleRepository from "../../../../domain/services/service_schedule/ServiceScheduleRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { services_schedule } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions';
import Boom from '@hapi/boom';

export default class extends ServiceScheduleRepository {
  async persist(domain_service: ServiceSchedule) {
    try {
      const service: any = convertCamelToSnakeCase(domain_service);
      const { id, name, schedule, info } = service;

      const seqCreateServiceSchedule = await services_schedule.create({
        id,
        name,
        schedule: schedule,
        info
      });

      return new ServiceSchedule(
        seqCreateServiceSchedule.id,
        seqCreateServiceSchedule.name,
        seqCreateServiceSchedule.schedule,
        seqCreateServiceSchedule.info
      );
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - service schedule repository - persist');
    }
  }

  async getByFilter(filter: any): Promise<any> {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqServiceSchedule = await services_schedule.findAll({ where: filter });

      if (seqServiceSchedule.length > 0) {
        return seqServiceSchedule.map((seqServiceSchedule: any) => new ServiceSchedule(
          seqServiceSchedule.id,
          seqServiceSchedule.name,
          seqServiceSchedule.schedule,
          seqServiceSchedule.info
        ));
      }
      return;
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - service schedule repository - getByFilter');
    }
  }

}