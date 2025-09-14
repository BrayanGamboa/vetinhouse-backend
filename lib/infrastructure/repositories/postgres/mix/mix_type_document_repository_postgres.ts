import TypeDocument from "../../../../domain/mix/type_document/TypeDocument";
import TypeDocumentRepository from "../../../../domain/mix/type_document/TypeDocumentRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { mix_document_type } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions';
import Boom from '@hapi/boom';

export default class extends TypeDocumentRepository {
  async persist(domain_role_user: TypeDocument) {
    try {
      const documentType: any = convertCamelToSnakeCase(domain_role_user);
      const { id, name, description, info } = documentType;

      const seqCreateDocumentType = await mix_document_type.create({
        id,
        name,
        description,
        info
      });

      return new TypeDocument(
        seqCreateDocumentType.id,
        seqCreateDocumentType.name,
        seqCreateDocumentType.description,
        seqCreateDocumentType.info
      );
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - document type repository - persist');
    }
  }

  async update(documentTypeId: number, fieldsUpdate: any): Promise<TypeDocument> {
    try {
      // Since getByFilter returns an array [], we access position 0.
      const seqDocumentTypeBefore = await this.getByFilter({ id: documentTypeId });

      fieldsUpdate = {
        ...seqDocumentTypeBefore,
        ...fieldsUpdate
      }
      fieldsUpdate.info = {
        ...seqDocumentTypeBefore.info,
        updated_at: new Date().toISOString()
      }

      fieldsUpdate = convertCamelToSnakeCase(fieldsUpdate);

      return await mix_document_type.update(fieldsUpdate, {
        where: { id: documentTypeId }
      });
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - role user repository - update');
    }
  }

  async getByFilter(filter: any): Promise<any> {
    try {
      filter = convertCamelToSnakeCase(filter);
      const seqDocumentType = await mix_document_type.findAll({ where: filter });

      if (seqDocumentType.length > 0) {
        return seqDocumentType.map((seqDocumentType: any) => new TypeDocument(
          seqDocumentType.id,
          seqDocumentType.name,
          seqDocumentType.description,
          seqDocumentType.info
        ));
      }
      return;
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - document type repository - getByFilter');
    }
  }

  async remove(documentTypeId: number): Promise<TypeDocument> {
    try {
      const seqDocumentType = await mix_document_type.findByPk(documentTypeId);
      if (!seqDocumentType) return seqDocumentType;
      return await seqDocumentType.destroy();
    } catch (err) {
      console.error(err);
      throw Boom.badImplementation('Error - document type repository - remove');
    }
  }

}