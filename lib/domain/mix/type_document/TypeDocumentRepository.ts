/* eslint-disable @typescript-eslint/no-unused-vars */
import DocumentType from "./TypeDocument";
import Boom from "@hapi/boom";

export default class {

  persist(domainDocumentType: DocumentType): Promise<DocumentType> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  update(documentTypeId: number, fields: any): Promise<DocumentType> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(documentTypeId: number): Promise<DocumentType> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find(): Promise<DocumentType[]> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
