import User from '../../../../domain/auth/user/User';
import UserRepository from '../../../../domain/auth/user/UserRepository';
import DocumentTypeRepository from '../../../../domain/mix/type_document/TypeDocumentRepository';
import RoleUserRepository from '../../../../domain/auth/role_user/RoleUserRepository';
import Boom from '@hapi/boom';

export default async (
  document: string,
  name: string,
  lastName: string,
  email: string,
  password: string,
  roleId: number,
  documentTypeId: number,
  { userRepository, documentTypeRepository, roleUserRepository }: { userRepository: UserRepository, documentTypeRepository: DocumentTypeRepository, roleUserRepository: RoleUserRepository }
) => {
  const user = new User(document, name, lastName, email, password, documentTypeId, roleId, {
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  if (((await userRepository.getByFilter({document})).info) != null) {
    throw Boom.forbidden("User already exists");
  }

  if (((await userRepository.getByFilter({email})).info) != null) {
    throw Boom.forbidden("Email already exists");
  }

  if (((await documentTypeRepository.get(documentTypeId)).info) == null)
    throw Boom.notFound('Document type not found');

  if (((await roleUserRepository.get(roleId)).info) == null)
    throw Boom.notFound("Role user not found");

  return await userRepository.persist(user);
};
