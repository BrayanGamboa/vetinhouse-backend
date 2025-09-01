import TypeDocument from "../../../../domain/mix/type_document/TypeDocument";
import TypeDocumentRepository from "../../../../domain/mix/type_document/TypeDocumentRepository";
import models from "../../../orm/sequelize/models/relational_models";
const { mix_document_type } = models;
import { convertCamelToSnakeCase } from '../../../../application/utilities/general_functions'

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
      throw new Error('Error creating document type');
    }
  }
  async find(): Promise<TypeDocument[]> {
    try {
      const seqDocumentType = await mix_document_type.findAll();
      return seqDocumentType.map((seqDocumentType: any) => new TypeDocument(
        seqDocumentType.id,
        seqDocumentType.name,
        seqDocumentType.description,
        seqDocumentType.info
      ));
    } catch (err) {
      console.error(err);
      throw new Error('Error fetching document types');
    } 
  }
  async get(documentTypeId: number): Promise<TypeDocument> {
    try {
      const seqDocumentType = await mix_document_type.findByPk(documentTypeId);
      
      let documentType = new TypeDocument();

      if (seqDocumentType != null) {
        documentType = new TypeDocument(
          seqDocumentType.id,
          seqDocumentType.name,
          seqDocumentType.description,
          seqDocumentType.info
        );
      }

      return documentType;
    } catch (err) {
      console.error(err);
      throw new Error('Error fetching document type');
    }
  }

  async remove(documentTypeId: number): Promise<TypeDocument> {
    try {
      const seqDocumentType = await mix_document_type.findByPk(documentTypeId);
      if (seqDocumentType == null) {
        throw new Error('Document type not found');
      }
      await seqDocumentType.destroy();
      return new TypeDocument(
        seqDocumentType.id,
        seqDocumentType.name,
        seqDocumentType.description,
        seqDocumentType.info
      );
    } catch (err) {
      console.error(err);
      throw new Error('Error deleting document type');
    }
  }

}