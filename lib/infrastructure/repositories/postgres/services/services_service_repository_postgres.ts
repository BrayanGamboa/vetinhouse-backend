import Service from "../../../../domain/services/service/Service";
import ServiceRepository from "../../../../domain/services/service/ServiceRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { services_service } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions';
import Boom from '@hapi/boom';

export default class extends ServiceRepository {
  async persist(domain_service: Service) {
    try {
      const service: any = convertCamelToSnakeCase(domain_service);
      const { id, name, description, value, scheduleServicioId, info } = service;

      const seqCreateService = await services_service.create({
        id,
        name,
        description,
        value, 
        scheduleServicioId,
        info
      });

      return new Service(
        seqCreateService.id,
        seqCreateService.name,
        seqCreateService.description,
        seqCreateService.value,
        seqCreateService.scheduleServicioId ?? null,
        seqCreateService.info
      );
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - service repository - persist');
    }
  }

  async getByFilter(filter: any): Promise<any> {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqService = await services_service.findAll({ where: filter });

      if (seqService.length > 0) {
        return seqService.map((seqService: any) => new Service(
          seqService.id,
          seqService.name,
          seqService.description,
          seqService.value,
          seqService.scheduleServicioId ?? null,
          seqService.info
        ));
      }
      return;
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - service repository - getByFilter');
    }
  }

}