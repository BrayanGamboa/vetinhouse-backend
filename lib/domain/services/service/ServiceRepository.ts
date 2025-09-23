/* eslint-disable @typescript-eslint/no-unused-vars */
import TypeDocument from "./Service";
import DocumentType from "./Service";

export default class {

  persist(domainDocumentType: DocumentType): Promise<DocumentType> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  update(documentTypeId: number, fields: any): Promise<TypeDocument> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(documentTypeId: number): Promise<TypeDocument> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find(): Promise<DocumentType[]> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
