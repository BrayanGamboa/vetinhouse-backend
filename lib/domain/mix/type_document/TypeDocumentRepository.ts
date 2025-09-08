/* eslint-disable @typescript-eslint/no-unused-vars */
import DocumentType from "./TypeDocument";

export default class {

  persist(domainDocumentType: DocumentType): Promise<DocumentType> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge(domainDocumentType: DocumentType): Promise<DocumentType> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(documentTypeId: number): Promise<DocumentType> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(documentTypeId: number): Promise<DocumentType> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find(): Promise<DocumentType[]> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
