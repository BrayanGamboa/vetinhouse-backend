import TypeDocument from '../../../../domain/mix/type_document/TypeDocument';
import TypeDocumentRepository from '../../../../domain/mix/type_document/TypeDocumentRepository';
import Boom from '@hapi/boom';

export default async (
  id: number,
  name: string,
  description: string,
  { documentTypeRepository }: { documentTypeRepository: TypeDocumentRepository }
) => {

  if(await documentTypeRepository.getByFilter({ id }))
    throw Boom.forbidden("Document type with this ID already exists, please choose another");

  if (await documentTypeRepository.getByFilter({ name }))
    throw Boom.forbidden("Document type with this name already exists, please choose another");

  const typeDocument = new TypeDocument(id, name, description, {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  return await documentTypeRepository.persist(typeDocument);
};
