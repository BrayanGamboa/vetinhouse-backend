import TypeDocument from "../../../../domain/mix/type_document/TypeDocument";
import TypeDocumentRepository from "../../../../domain/mix/type_document/TypeDocumentRepository";

export default async (id: number, { documentTypeRepository }: { documentTypeRepository: TypeDocumentRepository }): Promise<TypeDocument> => {
  return await documentTypeRepository.get(id);
};