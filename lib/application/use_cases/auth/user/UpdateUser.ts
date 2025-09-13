import UserRepository from '../../../../domain/auth/user/UserRepository';
import DocumentTypeRepository from '../../../../domain/mix/type_document/TypeDocumentRepository';
import RoleUserRepository from '../../../../domain/auth/role_user/RoleUserRepository';
import Boom from '@hapi/boom';

export default async (
  fieldsUpdate: any,
  userId: string,
  { userRepository, documentTypeRepository, roleUserRepository }: { userRepository: UserRepository, documentTypeRepository: DocumentTypeRepository, roleUserRepository: RoleUserRepository }
) => {
  
  if (fieldsUpdate?.email) {
    if (await userRepository.getByFilter({ email: fieldsUpdate.email }))
      throw Boom.forbidden("Document or email already in use");
  }  
  
  if (fieldsUpdate?.documentTypeId) {
    if (!(await documentTypeRepository.getByFilter({ id: fieldsUpdate.documentTypeId })))
      throw Boom.notFound('Document type not found');    
  }

  if (fieldsUpdate?.roleId){
    if (!(await roleUserRepository.getByFilter({ id: fieldsUpdate.roleId })))
      throw Boom.notFound("Role user not found");
  }
  
  return await userRepository.update(userId, fieldsUpdate);
};
