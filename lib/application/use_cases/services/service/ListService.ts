import ServiceRepository from "../../../../domain/services/service/ServiceRepository";
import DocumentType from "../../../../domain/services/service/Service";

export default async ({ serviceRepository }: { serviceRepository: ServiceRepository }): Promise<DocumentType[]> => { 
  return await serviceRepository.getByFilter({});
};
