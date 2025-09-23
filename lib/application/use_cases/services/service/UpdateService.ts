import TypeDocumentRepository from '../../../../domain/mix/type_document/TypeDocumentRepository';
import Boom from '@hapi/boom';

export default async (
  id: number,
  fields: any,
  { documentTypeRepository }: { documentTypeRepository: TypeDocumentRepository }
) => {

  if (!(await documentTypeRepository.getByFilter(id)))
    throw Boom.notFound("Document type not found")

  if (fields?.id) {
    if (await documentTypeRepository.getByFilter({ id : fields.id }))
      throw Boom.forbidden("Document type with this ID already exists, please choose another");
  }

  if (fields?.name) {
    if (await documentTypeRepository.getByFilter({ name: fields.name }))
      throw Boom.forbidden("Document type with this name already exists, please choose another");
  }

  return await documentTypeRepository.update(id, fields);
};
