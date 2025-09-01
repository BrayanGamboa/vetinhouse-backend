import DocumentTypeRepository from "../../../../domain/auth/role_user/RoleUserRepository";
import DocumentType from "../../../../domain/auth/role_user/RoleUser";

export default ({ documentTypeRepository }: { documentTypeRepository: DocumentTypeRepository }): Promise<DocumentType[]> => { 
  return documentTypeRepository.find();
};
