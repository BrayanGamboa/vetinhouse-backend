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
      const { id, name, description, info } = service;

      const seqCreateService = await services_service.create({
        id,
        name,
        description,
        info
      });

      return new Service(
        seqCreateService.id,
        seqCreateService.name,
        seqCreateService.description,
        seqCreateService.info
      );
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - service repository - persist');
    }
  }

  // async update(documentTypeId: number, fieldsUpdate: any): Promise<TypeDocument> {
  //   try {
  //     // Since getByFilter returns an array [], we access position 0.
  //     const seqDocumentTypeBefore = await this.getByFilter({ id: documentTypeId });

  //     fieldsUpdate = {
  //       ...seqDocumentTypeBefore,
  //       ...fieldsUpdate
  //     }
  //     fieldsUpdate.info = {
  //       ...seqDocumentTypeBefore.info,
  //       updated_at: new Date().toISOString()
  //     }

  //     fieldsUpdate = convertCamelToSnakeCase(fieldsUpdate);

  //     return await mix_document_type.update(fieldsUpdate, {
  //       where: { id: documentTypeId }
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     throw Boom.badImplementation('Error - role user repository - update');
  //   }
  // }

  async getByFilter(filter: any): Promise<any> {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqService = await services_service.findAll({ where: filter });

      if (seqService.length > 0) {
        return seqService.map((seqService: any) => new Service(
          seqService.id,
          seqService.name,
          seqService.description,
          seqService.info
        ));
      }
      return;
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - service repository - getByFilter');
    }
  }

  // async remove(documentTypeId: number): Promise<TypeDocument> {
  //   try {
  //     const seqDocumentType = await mix_document_type.findByPk(documentTypeId);
  //     if (!seqDocumentType) return seqDocumentType;
  //     return await seqDocumentType.destroy();
  //   } catch (err) {
  //     console.error(err);
  //     throw Boom.badImplementation('Error - document type repository - remove');
  //   }
  // }

}