import TypeDocumentRepository from '../../../../domain/mix/type_document/TypeDocumentRepository';
import Boom from '@hapi/boom';

export default async (documentTypeId: number, { documentTypeRepository }: { documentTypeRepository: TypeDocumentRepository}) => {
  if(!(await documentTypeRepository.getByFilter({id: documentTypeId})))
    throw Boom.notFound('Document type not found');
  return await documentTypeRepository.remove(documentTypeId);
};
