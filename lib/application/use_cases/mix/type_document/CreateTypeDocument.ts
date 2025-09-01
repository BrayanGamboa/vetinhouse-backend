import TypeDocument from '../../../../domain/mix/type_document/TypeDocument';
import TypeDocumentRepository from '../../../../domain/mix/type_document/TypeDocumentRepository';

export default async (
  id: number,
  name: string,
  description: string,
  { documentTypeRepository }: { documentTypeRepository: TypeDocumentRepository }
) => {

  if (((await documentTypeRepository.get(id)).info) != null) {
    return 403;
  }

  const typeDocument = new TypeDocument(id, name, description, {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  return await documentTypeRepository.persist(typeDocument);
};
