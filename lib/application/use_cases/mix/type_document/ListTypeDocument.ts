import DocumentTypeRepository from "../../../../domain/auth/role_user/RoleUserRepository";
import DocumentType from "../../../../domain/auth/role_user/RoleUser";

export default async ({ documentTypeRepository }: { documentTypeRepository: DocumentTypeRepository }): Promise<DocumentType[]> => { 
  return await documentTypeRepository.find();
};
