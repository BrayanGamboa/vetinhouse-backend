import DocumentTypeRepository from "../../../../domain/mix/type_document/TypeDocumentRepository";
import DocumentType from "../../../../domain/mix/type_document/TypeDocument";

export default async ({ documentTypeRepository }: { documentTypeRepository: DocumentTypeRepository }): Promise<DocumentType[]> => { 
  return await documentTypeRepository.getByFilter({});
};
